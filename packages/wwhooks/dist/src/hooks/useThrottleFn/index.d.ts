import { Fn } from '../../common/interface';
export interface ThrottleSettings {
    leading?: boolean | undefined;
    trailing?: boolean | undefined;
}
export default function useThrottleFn<T extends Fn = Fn>(fn: T, wait?: number, options?: ThrottleSettings): {
    run: any;
    cancel: any;
    flush: any;
};
