import { setStateAction } from '../../common/utils';
import { useMemo, useState } from 'react';
import { SetStateAction } from '../../common/interface';
import useUpdateEffect from '../useUpdateEffect';

export const useUrlState = (
  defaultValue?: string | string[][] | Record<string, string> | URLSearchParams,
  navigateMode?: 'push' | 'replace',
) => {
  const [urlState, setUrlState] = useState(() => {
    let init = defaultValue !== null ? defaultValue : location.search;
    return new URLSearchParams(init);
  });

  const Actions = useMemo(
    () => ({
      set: (key: string, entry: SetStateAction<string>) => {
        setUrlState((prev) => {
          const temp = new URLSearchParams(prev);
          const prevValue = prev.get(key);
          const data = setStateAction<string>(entry, prevValue ?? '');
          if (data === undefined) {
            temp.delete(key);
          } else {
            temp.set(key, data);
          }
          return temp;
        });
      },
      clear: () => {
        setUrlState(new URLSearchParams());
      },
    }),
    [urlState, setUrlState],
  );

  useUpdateEffect(() => {
    const mode = `${navigateMode}State` as 'pushState' | 'replaceState';
    const params = urlState.toString();
    if (!params) {
      history[mode]({}, document.title, window.location.pathname);
      return;
    }
    const url = '?' + params;
    history[mode](null, '', url);
  }, [urlState]);

  return [urlState, Actions] as const;
};

export default useUrlState;
