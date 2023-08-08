import { useEffect, useState } from 'react';
import usePersistFn from '../usePersistFn';

interface useControllableValueProps<T> {
  value?: T;
  defaultValue?: T;
}
export function useControllableValue<T = string>(
  props: useControllableValueProps<T>,
  trigger?: (val: T) => void,
) {
  const { value, defaultValue } = props;
  const [state, setState] = useState(() => {
    if (value === undefined) {
      return defaultValue;
    } else {
      return value;
    }
  });
  useEffect(() => {
    if (value !== undefined) {
      setState(value);
    }
  }, [value]);
  const setValue = usePersistFn((val: T) => {
    if (value === undefined) {
      setState(val);
    }
    trigger?.(val);
  });
  return [state, setValue] as const;
}
export default useControllableValue;
