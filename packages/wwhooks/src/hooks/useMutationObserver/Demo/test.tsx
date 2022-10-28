/**
 * debug: true
 */
import React, { useRef, useState } from 'react';
import useMutationObserver from '..';

export default () => {
  const ref = useRef();
  useMutationObserver(
    ref,
    (mutations: MutationRecord[], observer: MutationObserver) => {
      console.log(mutations, observer);
    },
  );
  const [count, setCount] = useState(0);
  return (
    <div>
      <div>
        {count}
        <button onClick={() => setCount((e) => e + 2)}>plus2</button>
        <button onClick={() => setCount((e) => --e)}>minus</button>
      </div>
      <div
        ref={ref}
        style={{
          height: 100,
          width: 200,
          resize: 'both',
          border: '1px solid',
          overflow: 'auto',
        }}
      >
        {Array(count)
          .fill(count)
          .map((item, index) => {
            return <div key={index}>{item}</div>;
          })}
      </div>
    </div>
  );
};
