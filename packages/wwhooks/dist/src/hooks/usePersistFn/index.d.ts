import { Fn } from 'packages/wwhooks/src/common/interface';
declare const usePersistFn: <T extends Fn = Fn>(fn: T) => T;
export default usePersistFn;
