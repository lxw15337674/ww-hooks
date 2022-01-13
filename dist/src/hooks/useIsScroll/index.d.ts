export interface ScrollState {
  x: boolean;
  y: boolean;
}
declare const useIsScroll: (target: any) => ScrollState;
export default useIsScroll;
