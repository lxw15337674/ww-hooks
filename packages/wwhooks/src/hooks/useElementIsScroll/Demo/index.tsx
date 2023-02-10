/**
 * title: 基本用法
 * description: 通过ref监听节点变化
 */
import React, { useRef } from 'react';
import { useElementIsScroll } from 'wwhooks';

export default () => {
  const ref = useRef();
  const isScrollState = useElementIsScroll(() => {
    return document.getElementById('button');
  });

  return (
    <>
      <p>x : {isScrollState.x.toString()}</p>
      <p>y : {isScrollState.y.toString()}</p>
      <div
        id="button"
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
