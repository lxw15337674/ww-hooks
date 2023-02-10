import { SetDispatch, SetPartialDispatch } from '../../common/interface';
export interface Action<T> {
  reset: () => void;
  setAll: SetDispatch<T>;
  isEdited: boolean;
}
export declare function useObject<T extends object = object>(
  defaultValue: T | (() => T),
): [T, SetPartialDispatch<T>, Action<T>];
export default useObject;
