import { isEqual } from '../../common/utils';
import React, {
  createContext,
  useContext,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import usePersistFn from '../usePersistFn';
import useUpdate from '../useUpdate';

interface ContextProps<T> {
  children: React.ReactNode | ((value: T) => React.ReactNode);
}

interface Context<T> {
  store: T;
  setStore: (value: T) => void;
  listeners: Listener<T>;
}
type Listener<T> = Set<(value: Partial<T>) => void>;

export function initContext<T extends object>(initialState: T) {
  const Context = createContext<Context<T>>(null);
  return {
    Provider: React.memo(({ children }: ContextProps<T>) => {
      const [value, setValue] = useState(initialState);
      const listeners = useRef<Listener<T>>(new Set()).current;
      const setStore = usePersistFn((nextStore: T) => {
        setValue(nextStore);
        for (let l of listeners) {
          l(nextStore);
        }
      });
      return (
        <Context.Provider
          value={{ store: value, setStore, listeners: listeners }}
        >
          {typeof children === 'function' ? children(value) : children}
        </Context.Provider>
      );
    }),
    useStore: <D extends Partial<T>>(selector: (value: T) => D) => {
      const forceUpdate = useUpdate();
      const { store, setStore, listeners } = useContext<Context<T>>(Context);
      const selectedStore = selector(store);
      const cb = usePersistFn((nextStore: T) => {
        for (let key in selectedStore) {
          if (
            !isEqual(selectedStore[key], nextStore[key as unknown as keyof T])
          ) {
            forceUpdate();
            break;
          }
        }
      });
      useLayoutEffect(() => {
        listeners.add(cb);
        return () => {
          listeners.delete(cb);
        };
      }, []);

      return { store: selectedStore, setStore };
    },
  };
}
export default initContext;
