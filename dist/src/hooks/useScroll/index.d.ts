import { Target } from '../../common/interface';
interface Position {
  left: number;
  top: number;
}
export default function useScroll(target: Target): {
  readonly position: Position;
};
export {};
