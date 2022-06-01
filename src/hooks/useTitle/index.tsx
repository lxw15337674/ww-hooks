import { InitialState } from '../../common/interface';
import { useEffect, useState } from 'react';
import useUnmount from '../useUnmount';
import useMount from '../useMount';
import useMutationObserver from '../useMutationObserver';

function useTitle(
  InitialState: InitialState<string> = document.title,
  restoreOnUnmount: boolean = false,
) {
  const [title, setTitle] = useState(InitialState);
  const [beforeTitle] = useState(document.title);

  useEffect(() => {
    console.log(title);
    document.title = title;
  }, [title]);

  useMount(() => {
    setTitle(InitialState);
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
