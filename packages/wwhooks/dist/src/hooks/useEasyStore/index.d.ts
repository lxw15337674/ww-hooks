import React from 'react';
interface ContextProps<T> {
  children: React.ReactNode | ((value: T) => React.ReactNode);
}
export declare function initContext<T extends object>(
  initialState: T,
): {
  Provider: React.MemoExoticComponent<
    ({ children }: ContextProps<T>) => JSX.Element
  >;
  useStore: <D extends Partial<T>>(
    selector: (value: T) => D,
  ) => {
    store: D;
    setStore: (value: T) => void;
  };
};
export default initContext;
