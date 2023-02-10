export declare function useToggle<T = string, U = string>(
  defaultValue: T,
  reverseValue: U,
): readonly [T | U, (value?: T | U) => void];
export default useToggle;
