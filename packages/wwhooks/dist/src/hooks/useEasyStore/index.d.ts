declare function initContext<T extends object>(initialState: T): {
    Provider: any;
    useStore: <D extends Partial<T>>(selector: (value: T) => D) => {
        store: D;
        setStore: any;
    };
};
export default initContext;
