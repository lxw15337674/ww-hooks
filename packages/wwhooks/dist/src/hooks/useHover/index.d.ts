import { BasicTarget } from 'packages/wwhooks/src/common/interface';
export interface UseHoverOptions {
  onEnter?: () => void;
  onLeave?: () => void;
  onChange?: (isHovering: boolean) => void;
}
export declare const useHover: (
  target: BasicTarget,
  options?: UseHoverOptions,
) => boolean;
export default useHover;
