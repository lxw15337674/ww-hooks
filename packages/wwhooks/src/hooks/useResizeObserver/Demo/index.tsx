/**
 * title: 用法
 * desc: 通过ref监听节点变化
 */
import React, { useRef } from 'react';
import { useResizeObserver } from 'wwhooks';

export default () => {
  const ref = useRef();
  useResizeObserver(ref, (entry) => {
    console.log(entry);
  });
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
    ></div>
  );
};
