import { BasicTarget } from 'packages/wwhooks/src/common/interface';
export interface Options {
  onEnter?: () => void;
  onLeave?: () => void;
}
declare const _default: (target: BasicTarget, options?: Options) => boolean;
export default _default;
