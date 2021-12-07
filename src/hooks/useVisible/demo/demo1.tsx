/**
 * title: 基础用法
 * desc: 使用 ref 监听
 */

import React, { useRef } from 'react';
import { useVisible } from 'wwhooks';

export default () => {
  const ref = useRef();
  const visible = useVisible(ref);
  return (
    <div>
      <div style={{ height: 200, width: 200, overflow: 'scroll' }}>
        <div ref={ref}>observer dom</div>
        <div style={{ height: 300 }}></div>
      </div>
      <p>visible:{visible.toString()}</p>
    </div>
  );
};
