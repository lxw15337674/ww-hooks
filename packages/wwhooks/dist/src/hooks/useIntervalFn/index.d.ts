export declare function useIntervalFn(
  fn: () => void,
  delay: number,
): {
  start: () => void;
  clear: () => void;
  looping: boolean;
};
export default useIntervalFn;
