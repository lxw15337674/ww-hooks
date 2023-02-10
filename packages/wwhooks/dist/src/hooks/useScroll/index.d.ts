import { BasicTarget } from '../../common/interface';
export interface Position {
  left: number;
  top: number;
}
export declare function useScroll(target: BasicTarget): Position;
export default useScroll;
