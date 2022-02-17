import { useMemo, useState } from 'react';
import usePersistFn from '../usePersistFn';

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

  const reset = usePersistFn(() => {
    setNumber(defaultValue);
  });

  return [number, { set: setNumber, reset, ...actions }] as const;
};

export default useNumber;
