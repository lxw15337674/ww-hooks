declare function initContext<V extends object, T extends object>(useHook: (initialState?: T) => V): {
    Provider: any;
    useStore: (selector: (value: V) => Partial<V>) => Partial<V>;
    usePicker: (keys: (keyof V)[]) => Partial<V>;
    withPicker: <T_1 extends object>(Child: React.FC<T_1 & Partial<V>>, keys: (keyof V)[]) => (props: T_1) => any;
};
export default initContext;
