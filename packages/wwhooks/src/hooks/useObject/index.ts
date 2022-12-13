import { useMemo, useState } from 'react';
import { isEqual, setStateAction } from '../../common/utils';
import { SetDispatch, SetPartialDispatch } from '../../common/interface';
import usePersistFn from '../usePersistFn';

export interface Action<T> {
  reset: () => void;
  setAll: SetDispatch<T>;
  isEdited: boolean;
}

export function useObject<T extends object = object>(
  defaultValue: T | (() => T),
): [T, SetPartialDispatch<T>, Action<T>] {
  const [object, setObject] = useState<T>(defaultValue);
  const reset = usePersistFn(() => {
    setObject(defaultValue);
  });

  const isEdited = useMemo(() => {
    return !isEqual(object, defaultValue);
  }, [object, defaultValue]);

  const set = usePersistFn((object) => {
    setObject((prevObject: T) => {
      const state = setStateAction<Partial<T>>(object, prevObject);
      return { ...prevObject, ...state };
    });
  });

  return [object, set, { setAll: setObject, reset, isEdited }];
}

export default useObject;
