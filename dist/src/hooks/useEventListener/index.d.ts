import { Target } from '../../common/interface';
declare type Options = {
  target?: Target;
  capture?: boolean;
  once?: boolean;
  passive?: boolean;
};
declare function useEventListener(
  eventName: string,
  handler: (e: Event) => void,
  options?: Options,
): void;
export default useEventListener;
