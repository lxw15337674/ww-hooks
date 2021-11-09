import { useEffect, useRef, useState } from 'react';

type Size = { width?: number; height?: number };

function useSize() {
  const ref = useRef<HTMLDivElement>();
  const [state, setState] = useState<Size>({
    width: null,
    height: null,
  });

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        setState({
          width: entry.target.clientWidth,
          height: entry.target.clientHeight,
        });
      });
    });
    if (ref.current) {
      resizeObserver.observe(ref.current);
    }
    return () => {
      resizeObserver.disconnect();
    };
  }, [ref]);

  return { size: state, ref } as const;
}

export default useSize;
