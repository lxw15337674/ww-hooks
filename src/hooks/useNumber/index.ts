import { useState } from 'react';
import usePersistFn from '../usePersistFn';

interface Options {
  min?: number;
  max?: number;
}

function getTargetValue(val: number, options: Options = {}) {
  const { min, max } = options;
  let target = val;
  if (typeof max === 'number') {
    target = Math.min(max, target);
  }
  if (typeof min === 'number') {
    target = Math.max(min, target);
  }
  return target;
}

const useNumber = (defaultValue = 0, config?: Options) => {
  const [number, setNumber] = useState<number>(
    getTargetValue(defaultValue, config),
  );

  const setValue = usePersistFn((v) => {
    setNumber(getTargetValue(v, config));
  });

  const plus = usePersistFn((v: number = 1) => {
    setNumber((c) => c + v);
  });
  const minus = usePersistFn((v: number = 1) => {
    setNumber((c) => c - v);
  });

  const reset = usePersistFn(() => {
    setNumber(defaultValue);
  });

  return [number, { set: setValue, reset, plus, minus }] as const;
};

export default useNumber;
