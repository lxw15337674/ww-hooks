import {
  MouseEventHandler,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useNumber, useTimeoutFn } from '../../';

export interface Config {
  delay?: number;
  exclusive?: boolean;
}
const useClick = (
  simpleClickFn = (e: React.MouseEvent) => {},
  doubleClickFn = (e: React.MouseEvent) => {},
  config: Config = {},
) => {
  const [clickCount, actions] = useNumber(0);

  const { delay, exclusive } = useMemo(
    () => ({ ...{ delay: 250, exclusive: false }, ...config }),
    [config],
  );

  const { run } = useTimeoutFn(() => {
    actions.reset();
  }, delay);

  const fn = useCallback(
    (e: React.MouseEvent) => {
      if (clickCount === 0) {
        simpleClickFn?.(e);
        run();
      }
      if (clickCount === 1) {
        if (!exclusive) {
          simpleClickFn?.(e);
        }
        doubleClickFn?.(e);
      }
      actions.plus(1);
    },
    [simpleClickFn, doubleClickFn, run, exclusive],
  );

  return fn;
};

export default useClick;
