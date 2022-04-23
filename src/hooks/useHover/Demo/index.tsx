/**
 *
 * title: 基本用法
 * desc: |
 * 简单示例
 *
 */
import React, { useRef } from 'react';
import useHover from '..';
const Demo = () => {
  const el = useRef(null);
  const isHovered = useHover(el);
  return (
    <div>
      <button ref={el}>
        <span>{isHovered ? 'Thank you!' : 'Hover me'}</span>
      </button>
    </div>
  );
};
export default Demo;
