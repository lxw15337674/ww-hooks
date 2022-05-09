/**
 *
 * title: 基本用法
 * desc: |
 * 简单示例
 *
 */
import React, { useRef } from 'react';
import Clipboard from '..';

export default () => {
  const ref = useRef(null);
  const isHovering = Clipboard(ref);
  return <button ref={ref}>{isHovering ? 'hover' : 'unhover'}</button>;
};
