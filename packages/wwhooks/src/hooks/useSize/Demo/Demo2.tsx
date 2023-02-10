/**
 * title: 用法
 * description: 通过ref监听节点变化
 */
import React, { useRef } from 'react';
import { useSize } from 'wwhooks';

export default () => {
  const { width, height } = useSize(document.body);
  return (
    <div>
      <p>width:{width}</p>
      <p>height:{height}</p>
    </div>
  );
};
