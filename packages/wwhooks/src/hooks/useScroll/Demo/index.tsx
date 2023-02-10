/**
 * title: 用法
 * description: 通过ref监听节点变化
 */
import React, { useRef } from 'react';
import { useScroll } from 'wwhooks';

export default () => {
  const ref = useRef();
  const position = useScroll(ref);
  return (
    <>
      <p>left:{position.left}</p>
      <p>top:{position.top}</p>
      <div
        ref={ref}
        style={{
          maxHeight: 200,
          maxWidth: 400,
          border: '1px solid',
          overflow: 'scroll',
        }}
      >
        <div style={{ height: 1000, width: 2000 }}>test</div>
      </div>
    </>
  );
};
