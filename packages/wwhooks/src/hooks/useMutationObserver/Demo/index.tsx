/**
 * title: 用法
 * description: 通过ref监听节点变化
 */
import React, { useRef, useState } from 'react';
import useMutationObserver from '..';
// import { useMutationObserver } from 'wwhooks';

export default () => {
  const ref = useRef<HTMLDivElement>();
  const [info, setInfo] = useState<Object>();
  const [watch, setState] = useMutationObserver(
    ref,
    (mutations: MutationRecord[], observer: MutationObserver) => {
      for (let mutation of mutations) {
        const target = mutation.target as HTMLDivElement;
        setInfo({ ...target.dataset } as typeof info);
      }
    },
  );
  console.log(info);
  return (
    <div>
      <div>
        <p>data:{JSON.stringify(info)}</p>
        <p>
          watch {watch.toString()}
          <button onClick={() => setState((v) => !v)}>
            {watch ? 'stop' : 'watch'}
          </button>
        </p>
        <p>
          <input
            onChange={(e) =>
              ref.current.setAttribute('data-name', e.target.value)
            }
          />
          <input
            onChange={(e) =>
              ref.current.setAttribute('data-location', e.target.value)
            }
          />
        </p>
      </div>
      <div ref={ref}>ref element </div>
    </div>
  );
};
