import { InitialState } from '../../common/interface';
import { useEffect, useState } from 'react';
import useUnmount from '../useUnmount';
import useMount from '../useMount';
import useMutationObserver from '../useMutationObserver';

function useTitle(
  initialState: InitialState<string> = document.title,
  restoreOnUnmount: boolean = false,
) {
  const [title, setTitle] = useState(initialState);
  const [beforeTitle] = useState(document.title);

  useEffect(() => {
    console.log(title);
    document.title = title;
  }, [title]);

  useMount(() => {
    setTitle(initialState);
  });

  useMutationObserver(
    document.head?.querySelector('title'),
    () => {
      setTitle(document.title);
    },
    { childList: true },
  );

  useUnmount(() => {
    if (restoreOnUnmount) {
      document.title = beforeTitle;
    }
  });

  return [title, setTitle] as const;
}

export default useTitle;
