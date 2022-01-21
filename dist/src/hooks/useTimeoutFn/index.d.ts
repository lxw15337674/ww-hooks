declare function useTimeoutFn<T extends any[] = never>(
  fn: (...args: T) => void,
  delay?: number,
): {
  waiting: boolean;
  run: (...args: T) => void;
  cancel: () => void;
};
export default useTimeoutFn;
