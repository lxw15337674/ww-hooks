/**
 * title: 基本用法
 * desc: 通过ref监听节点变化
 */
import React, { useRef } from 'react';
import { useIsScroll } from 'wwhooks';

export default () => {
  const ref = useRef();
  const isScrollState = useIsScroll(ref);
  return (
    <>
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
        <div style={{ height: 200, width: 400 }}>test</div>
      </div>
    </>
  );
};
