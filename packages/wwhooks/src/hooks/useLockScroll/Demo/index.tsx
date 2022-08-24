import React, { useRef } from 'react';
import { useLockScroll } from 'wwhooks';

export default () => {
  const domRef = useRef<HTMLDivElement>();
  const [toggle, lockState] = useLockScroll(domRef.current);
  const [toggleBody, lockBodyState] = useLockScroll();
  return (
    <>
      <p>
        <button onClick={() => toggle()}>lock:{lockState.toString()}</button>
        <button onClick={() => toggleBody()}>
          lockBody:{lockBodyState.toString()}
        </button>
      </p>

      <div
        style={{ height: 400, overflow: 'auto', border: `1px solid black` }}
        ref={domRef}
      >
        <div style={{ height: 1000 }} />
      </div>
    </>
  );
};
