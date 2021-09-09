import { useMemo, useState } from 'react';

export interface Actions {
  setTrue: () => void;
  setFalse: () => void;
  toggle: (value?: boolean) => void;
}
// 管理 boolean 值
export default function useBoolean(defaultValue = false): [boolean, Actions] {
  const [state, setState] = useState(defaultValue);
  const actions: Actions = useMemo(() => {
    const setTrue = () => setState(true);
    const setFalse = () => setState(false);
    const toggle = (value?: boolean) => {
      if (value === undefined) {
        setState((value) => !value);
        return;
      }
      setState(value);
    };
    return { toggle, setTrue, setFalse };
  }, []);

  return [state, actions];
}
