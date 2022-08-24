import { Fn } from '../../common/interface';
interface DebounceSettings {
    leading?: boolean | undefined;
    maxWait?: number | undefined;
    trailing?: boolean | undefined;
}
export default function useDebounceFn<T extends Fn = Fn>(fn: T, wait?: number, options?: DebounceSettings): {
    run: any;
    cancel: any;
    flush: any;
};
export {};
