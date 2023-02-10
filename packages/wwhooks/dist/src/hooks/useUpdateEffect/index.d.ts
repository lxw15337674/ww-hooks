export declare type EffectCallback<T> = (newValues: T, oldValues: T) => void;
export declare function useUpdateEffect<T extends any[]>(
  effect: EffectCallback<T>,
  deps: T,
): void;
export default useUpdateEffect;
