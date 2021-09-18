import { useMemo, useState } from 'react';

export interface Actions {
  setLeft: () => void;
  setRight: () => void;
  toggle: () => void;
}

function useToggle<T = string>(defaultValue: T, reverseValue: T): [T, Actions] {
  const [state, setState] = useState(defaultValue);
  const actions: Actions = useMemo(() => {
    const setLeft = () => setState(defaultValue);
    const setRight = () => setState(reverseValue);
    const toggle = () => {
      setState((s) => (s === defaultValue ? reverseValue : defaultValue));
    };
    return { toggle, setLeft, setRight };
  }, [defaultValue, reverseValue]);

  return [state, actions];
}

export default useToggle;
