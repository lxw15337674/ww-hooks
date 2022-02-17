import { useMemo, useState } from 'react';
import { isEqual, setState } from '../../common/utils';
import {
  SetDispatch,
  SetPartialDispatch,
  SetPartialStateAction,
} from '../../common/interface';
import usePersistFn from '../usePersistFn';

export interface Action<T> {
  reset: () => void;
  set: SetPartialDispatch<T>;
  setAll: SetDispatch<T>;
  isEdited: boolean;
}

export default function useObject<T extends object = object>(
  defaultValue: T | (() => T),
): [T, Action<T>] {
  const [object, setObject] = useState<T>(defaultValue);
  const reset = usePersistFn(() => {
    setObject(defaultValue);
  });

  const isEdited = useMemo(() => {
    return !isEqual(object, defaultValue);
  }, [object, defaultValue]);

  const set = usePersistFn((object: SetPartialStateAction<T>) => {
    setObject((prevObject: T) => {
      const state = setState<Partial<T>>(object, prevObject);
      return { ...prevObject, ...state };
    });
  });

  return [object, { setAll: setObject, set, reset, isEdited }];
}
