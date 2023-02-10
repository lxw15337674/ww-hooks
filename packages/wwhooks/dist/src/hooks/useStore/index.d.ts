import React from 'react';
interface ContextProps<V, T> {
  children: React.ReactNode | ((value: V) => React.ReactNode);
  initialState?: T;
}
export declare function initContext<V extends object, T extends object>(
  useHook: (initialState?: T) => V,
): {
  Provider: React.MemoExoticComponent<
    ({ children, initialState }: ContextProps<V, T>) => JSX.Element
  >;
  useStore: (selector: (value: V) => Partial<V>) => Partial<V>;
  usePicker: (keys: (keyof V)[]) => Partial<V>;
  withPicker: <T_1 extends object>(
    Child: React.FC<T_1 & Partial<V>>,
    keys: (keyof V)[],
  ) => (props: T_1) => JSX.Element;
};
export default initContext;
