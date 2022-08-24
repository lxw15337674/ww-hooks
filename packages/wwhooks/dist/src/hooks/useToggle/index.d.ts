declare function useToggle<T = string, U = string>(defaultValue: T, reverseValue: U): readonly [any, (value?: T | U) => void];
export default useToggle;
