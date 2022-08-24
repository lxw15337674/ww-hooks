import { BasicTarget } from '../../common/interface';
export interface ScrollState {
    x: boolean;
    y: boolean;
}
declare const useElementIsScroll: (target: BasicTarget<Element>) => any;
export default useElementIsScroll;
