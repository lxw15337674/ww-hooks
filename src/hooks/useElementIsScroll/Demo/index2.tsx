/**
 * debug : true
 */
import React, { useEffect, useRef } from 'react';
import { useElementIsScroll, useTimeoutFn } from 'wwhooks';

let visible = false;
export default () => {
  const ref = useRef();
  const isScrollState = useElementIsScroll(document.body);
  const { run } = useTimeoutFn(() => {
    visible = true;
  }, 1000);
  useEffect(() => {
    run();
  });
  return (
    <>
      窗口状态
      <p>x : {isScrollState.x.toString()}</p>
      <p>y : {isScrollState.y.toString()}</p>
      <div
        ref={ref}
        style={{
          height: 100,
          width: 200,
          border: '1px solid',
          overflow: 'scroll',
          resize: 'both',
        }}
      >
        {visible && <div style={{ height: 200, width: 400 }}>test</div>}
      </div>
    </>
  );
};
