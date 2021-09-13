import { useMemo, useState, useCallback } from 'react';
import { isEqual } from 'lodash';
interface Action<T> {
  reset: () => void;
  set: React.Dispatch<SetStateAction<T>>;
  isEdited: boolean;
}

export type SetStateAction<T> = Partial<T> | ((prevState: T) => Partial<T>);

export default function useObject<T extends object = object>(
  defaultValue: T = Object.create(null),
): [T, Action<T>] {
  const [state, setState] = useState<T>(defaultValue);
  const reset = useCallback(() => {
    setState(defaultValue);
  }, [defaultValue]);

  const isEdited = useMemo(() => {
    return !isEqual(state, defaultValue);
  }, [state, defaultValue]);

  const isValue = useCallback(
    (state: SetStateAction<T>): state is Partial<T> => {
      return typeof state !== 'function';
    },
    [],
  );

  const set = useCallback(
    (state: SetStateAction<T>) => {
      if (isValue(state)) {
        setState((prevState: T) => {
          return { ...prevState, ...state };
        });
        return;
      }
      setState((prevState: T) => {
        const innerState = state(prevState);
        return { ...prevState, ...innerState };
      });
    },
    [setState],
  );

  return [state, { set, reset, isEdited }];
}
