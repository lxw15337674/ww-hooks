import { EffectCallback } from '../useUpdateEffect';
export declare function useUpdateLayoutEffect<T extends any[]>(
  effect: EffectCallback<T>,
  deps: T,
): void;
export default useUpdateLayoutEffect;
