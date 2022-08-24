import { Target } from '../../common/interface';
declare type Options = {
    capture?: boolean;
    once?: boolean;
    passive?: boolean;
};
declare function useEventListener(target: Target, eventName: string, handler: (e: Event) => void, options?: Options): void;
export default useEventListener;
