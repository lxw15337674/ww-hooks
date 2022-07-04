import { isEqual } from '../../common/utils';
import React, {
  Children,
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import usePersistFn from '../usePersistFn';
import useUpdate from '../useUpdate';

interface Props<T> {
  initialState: T;
}
interface ContextProps<T> {
  children: React.ReactNode | ((value: T) => React.ReactNode);
}

interface Context<T> {
  store: T;
  setStore: (value: T) => void;
  listeners: Listener<T>;
}
type Listener<T> = Set<(value: Partial<T>) => void>;

function initContext<T>({ initialState }: Props<T>) {
  const Context = createContext<Context<T>>(null);
  // const listeners = createContext<Listener<T>>(null);

  return {
    Provider: React.memo(({ children }: ContextProps<T>) => {
      const storeRef = useRef(initialState);
      const forceUpdate = useUpdate();
      const listeners = useRef<Listener<T>>(new Set()).current;
      const store = storeRef.current;
      const setStore = usePersistFn((nextStore: Partial<T>) => {
        storeRef.current = { ...store, ...nextStore };
        console.log(storeRef.current);
        for (let l of listeners) {
          l(storeRef.current);
        }
      });

      useEffect(() => {
        console.log('Provider render', store);
      });
      console.log(store);
      return (
        <Context.Provider value={{ store, listeners, setStore }}>
          {typeof children === 'function' ? children(store) : children}
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
      console.log(store);
      return { store: selectedStore, setStore };
    },
    // useSelector: <D extends {}>(selector: (value: T) => D) => {
    //   const forceUpdate = useUpdate();
    //   const context  = React.useContext(Context);
    //   const listeners =context
    //   const selected = selector(value);
    //   const StoreValue = {
    //     selector,
    //     value,
    //     selected,
    //   };
    //   const ref = React.useRef(StoreValue);

    //   React.useLayoutEffect(() => {
    //     function listener(nextValue: Value) {
    //       try {
    //         const refValue = ref.current;
    //         if (refValue.value === nextValue) {
    //           return;
    //         }
    //         const nextSelected = refValue.selector(nextValue);
    //         if (isShadowEqual(refValue.selected, nextSelected)) {
    //           return;
    //         }
    //       } catch (e) {
    //         // ignore
    //       }
    //       forceUpdate();
    //     }

    //     listeners.add(listener);
    //     return () => {
    //       listeners.delete(listener);
    //     };
    //   }, []);
    //   return selected;
    // },
  };
}
export default initContext;
