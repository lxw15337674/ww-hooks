import { useMemo, useCallback, useState } from 'react';
import { isEqual } from 'lodash';
import { setState } from '@/common/utils';
import {
  SetDispatch,
  SetPartialDispatch,
  SetPartialStateAction,
} from '@/common/interface';

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
  const reset = useCallback(() => {
    setObject(defaultValue);
  }, [defaultValue]);

  const isEdited = useMemo(() => {
    return !isEqual(object, defaultValue);
  }, [object, defaultValue]);

  const set = useCallback(
    (object: SetPartialStateAction<T>) => {
      setObject((prevObject: T) => {
        const state = setState<Partial<T>>(object, prevObject);
        return { ...prevObject, ...state };
      });
    },
    [setObject],
  );

  return [object, { setAll: setObject, set, reset, isEdited }];
}
