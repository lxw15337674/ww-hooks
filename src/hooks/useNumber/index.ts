import { useCallback, useMemo, useState } from 'react';

const useNumber = (defaultValue: number = 0) => {
  const [number, setNumber] = useState<number>(defaultValue);

  const actions = useMemo(() => {
    const plus = (v: number = 1) => {
      setNumber((c) => c + v);
    };
    const minus = (v: number = 1) => {
      setNumber((c) => c - v);
    };
    return { plus, minus };
  }, []);

  const reset = useCallback(() => {
    setNumber(defaultValue);
  }, [defaultValue]);

  return [number, { set: setNumber, reset, ...actions }] as const;
};

export default useNumber;
