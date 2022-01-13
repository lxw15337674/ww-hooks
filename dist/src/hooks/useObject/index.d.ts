import { SetDispatch, SetPartialDispatch } from '../../common/interface';
export interface Action<T> {
  reset: () => void;
  set: SetPartialDispatch<T>;
  setAll: SetDispatch<T>;
  isEdited: boolean;
}
export default function useObject<T extends object = object>(
  defaultValue: T | (() => T),
): [T, Action<T>];
