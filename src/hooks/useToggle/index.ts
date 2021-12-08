import { useCallback, useState } from 'react';

function useToggle<T = string, U = string>(defaultValue: T, reverseValue: U) {
  const [state, setState] = useState<T | U>(defaultValue);
  const toggleState = useCallback((value?: T | U) => {
    if (value === undefined) {
      setState((value) =>
        value === defaultValue ? reverseValue : defaultValue,
      );
      return;
    }
    setState(value);
  }, []);
  return [state, toggleState] as const;
}

export default useToggle;
