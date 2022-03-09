import { useMemo } from 'react';
import useUpdate from '../useUpdate';
import { setInitialState } from '../../common/utils';
import Observer from './Observer';

const useComputed = <T extends Record<string, any>>(
  initialState: T | (() => T),
) => {
  const update = useUpdate();
  const observer = useMemo(() => {
    return new Observer(setInitialState(initialState), update);
  }, []);
  return observer.proxy;
};

export default useComputed;
