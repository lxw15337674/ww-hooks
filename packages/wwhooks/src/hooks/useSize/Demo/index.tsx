/**
 * title: 用法
 * description: 通过ref监听节点变化
 */
import React, { useRef } from 'react';
import { useSize } from 'wwhooks';

export default () => {
  const ref = useRef();
  const { width, height } = useSize(ref);
  console.log(width, height);
  return (
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
      <p>width:{width}</p>
      <p>height:{height}</p>
    </div>
  );
};
