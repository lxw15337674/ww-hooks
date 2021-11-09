/**
 * title: 用法
 * desc: 通过ref监听节点变化
 */
import React from 'react';
import useSize from '..';

export default () => {
  const { ref, size } = useSize();
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
      <p>width:{size.width}</p>
      <p>height:{size.height}</p>
    </div>
  );
};
