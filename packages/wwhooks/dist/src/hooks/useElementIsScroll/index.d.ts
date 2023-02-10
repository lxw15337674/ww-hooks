import { BasicTarget } from '../../common/interface';
export interface ScrollState {
  x: boolean;
  y: boolean;
}
export declare const useElementIsScroll: (
  target: BasicTarget<Element>,
) => ScrollState;
export default useElementIsScroll;
