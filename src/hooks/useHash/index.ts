import { useUpdate } from '@/';
import { isFunction } from 'lodash';
import {
  useState,
  useMemo,
  useCallback,
  Dispatch,
  SetStateAction,
} from 'react';

function getHash() {
  return window.location.hash.substr(1);
}

export default (
  initialState: string,
): [string, Dispatch<SetStateAction<string>>, () => void] => {
  const [hash, setHash] = useState<string>(() => {
    let hash = getHash();
    return hash ?? initialState;
  });

  useUpdate(() => {
    window.location.replace('#' + encodeURIComponent(hash));
  }, [hash]);

  const reset = useCallback(() => {
    setHash(initialState);
  }, [initialState]);

  return [hash, setHash, reset];
};
