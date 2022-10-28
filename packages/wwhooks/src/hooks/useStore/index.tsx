import { isEqual, pick } from '../../common/utils';
import React, {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
} from 'react';
import usePersistFn from '../usePersistFn';
import useUpdate from '../useUpdate';

interface ContextProps<V, T> {
  children: React.ReactNode | ((value: V) => React.ReactNode);
  initialState?: T;
}

interface Context<V> {
  value: V;
  listeners: Listener<V>;
}
type Listener<T> = Set<(value: Partial<T>) => void>;

function initContext<V extends object, T extends object>(
  useHook: (initialState?: T) => V,
) {
  const Context = createContext<Context<V>>(null);
  const Provider = React.memo(
    ({ children, initialState }: ContextProps<V, T>) => {
      const value = useHook(initialState);
      const store = React.useRef<Context<V>>({
        value,
        listeners: new Set(),
      }).current;
      store.value = value;
      useEffect(() => {
        for (let listener of store.listeners) {
          listener(value);
        }
      });
      return (
        <Context.Provider value={store}>
          {typeof children === 'function' ? children(store.value) : children}
        </Context.Provider>
      );
    },
  );
  const useStore = (selector: (value: V) => Partial<V>) => {
    const forceUpdate = useUpdate();
    const { value, listeners } = useContext<Context<V>>(Context);
    const selectedStore = selector(value);
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
    return selectedStore;
  };
  const usePicker = (keys: (keyof V)[]) => {
    return useStore((state) => pick(state, keys));
  };

  const withPicker = <T extends object>(
    Child: React.FC<T & Partial<V>>,
    keys: (keyof V)[],
  ) => {
    return (props: T) => {
      const picked = usePicker(keys);
      return <Child {...{ ...picked, ...props }} />;
    };
  };

  return {
    Provider,
    useStore,
    usePicker,
    withPicker,
  };
}
export default initContext;
