/**
 * title: 传入 DOM 元素
 * description: 通过传入dom元素监听
 */

import React from 'react';
import { useVisible } from 'wwhooks';

export default () => {
  // 这样写无法获取到节点
  // const visible2 = useVisible( document.querySelector('#demo2'));
  const visible = useVisible<Element>(() => document.getElementById('demo2'));
  return (
    <div>
      <div style={{ height: 200, width: 200, overflow: 'scroll' }}>
        <div id="demo2">observer dom</div>
        <div style={{ height: 300 }} />
      </div>
      <p>visible:{JSON.stringify(visible)}</p>
    </div>
  );
};
