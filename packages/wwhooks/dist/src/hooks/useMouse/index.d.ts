export interface MousePositionState {
  screenX: number;
  screenY: number;
  clientX: number;
  clientY: number;
  pageX: number;
  pageY: number;
}
declare const useMouse: () => MousePositionState;
export default useMouse;
