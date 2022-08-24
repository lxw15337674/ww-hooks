declare type EffectCallback<T> = (newValues: T, oldValues: T) => void;
declare function useUpdateLayoutEffect<T extends any[]>(effect: EffectCallback<T>, deps: T): void;
export default useUpdateLayoutEffect;
