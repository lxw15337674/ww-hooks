import { useState, Dispatch, SetStateAction, useEffect } from 'react';
import usePersistFn from '../usePersistFn';

const setWindowsHash = (hash: string) => {
  window.location.replace('#' + encodeURIComponent(hash));
};

export default (
  initialState?: string,
): [string, Dispatch<SetStateAction<string>>, () => void] => {
  const [hash, setHash] = useState<string>(() => {
    let hash = window.location.hash.substring(1);
    if (hash === '') {
      setWindowsHash(initialState);
      return initialState;
    }
    return hash;
  });

  useEffect(() => {
    if (hash === null || hash === undefined) {
      // https://stackoverflow.com/questions/1397329/how-to-remove-the-hash-from-window-location-url-with-javascript-without-page-r
      history.pushState(
        '',
        document.title,
        window.location.pathname + window.location.search,
      );
    } else {
      setWindowsHash(hash);
    }
  }, [hash]);

  const reset = usePersistFn(() => {
    setHash(initialState);
  });

  return [hash, setHash, reset];
};
