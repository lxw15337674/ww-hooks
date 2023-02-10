import { Target } from '../../common/interface';
declare type Options = {
  capture?: boolean;
  once?: boolean;
  passive?: boolean;
};
export declare function useEventListener<T = Event>(
  target: Target,
  eventName: string,
  handler: (e: T) => void,
  options?: Options,
): void;
export default useEventListener;
