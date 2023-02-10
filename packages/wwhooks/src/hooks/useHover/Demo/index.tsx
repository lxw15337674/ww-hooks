/**
 *
 * title: 基本用法
 * description: |
 * 简单示例
 *
 */
import React, { useRef } from 'react';
import { useHover } from 'wwhooks';

export default () => {
  const ref = useRef(null);
  const isHovering = useHover(ref);
  return <button ref={ref}>{isHovering ? 'hover' : 'unHover'}</button>;
};
