import { useState } from 'react';
import usePersistFn from '../usePersistFn';

export interface Options {
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
export type ValueParam = number | ((c: number) => number);

export const useNumber = (defaultValue = 0, config?: Options) => {
  const [number, setNumber] = useState<number>(
    getTargetValue(defaultValue, config),
  );

  const setValue = usePersistFn((v: ValueParam) => {
    const target = typeof v === 'number' ? v : v(number);
    setNumber(getTargetValue(target, config));
  });

  const plus = usePersistFn((v = 1) => {
    setValue((c) => c + v);
  });
  const minus = usePersistFn((v = 1) => {
    setValue((c) => c - v);
  });

  const reset = usePersistFn(() => {
    setValue(defaultValue);
  });

  return [number, { set: setValue, reset, plus, minus }] as const;
};

export default useNumber;
