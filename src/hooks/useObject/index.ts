import { useMemo, useCallback, useState } from 'react';
import { isEqual } from 'lodash';
import { setState } from '@/common/utils';
import { SetDispatch } from '@/common/interface';

interface Action<T> {
  reset: () => void;
  set: SetDispatch<T>;
  isEdited: boolean;
}

// export type setObjectAction<T> = Partial<T> | ((prevObject: T) => Partial<T>);

export default function useObject<T extends object = object>(
  defaultValue: T = Object.create(null),
): [T, Action<T>] {
  const [object, setObject] = useState<T>(defaultValue);
  const reset = useCallback(() => {
    setObject(defaultValue);
  }, [defaultValue]);

  const isEdited = useMemo(() => {
    return !isEqual(object, defaultValue);
  }, [object, defaultValue]);

  const set = useCallback(
    (object) => {
      setObject((prevObject: T) => {
        const state = setState<T>(object, prevObject);
        return { ...prevObject, ...state };
      });
    },
    [setObject],
  );

  return [object, { set, reset, isEdited }];
}
