import { useCallback, useMemo, useState } from 'react';

export interface SetBoolean {
  (value?: boolean): void;
}
// 管理 boolean 值
export default function useBoolean(
  defaultValue = false,
): [boolean, SetBoolean] {
  const [state, setState] = useState(defaultValue);
  const setBoolean = useCallback((value) => {
    if (value === undefined) {
      setState((value) => !value);
      return;
    }
    setState(value);
  }, []);

  return [state, setBoolean];
}
