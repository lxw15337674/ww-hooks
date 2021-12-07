/**
 * title: 传入 DOM 元素
 * desc: 通过传入dom元素监听
 */

import React from 'react';
import { useVisible } from 'wwhooks';

export default () => {
  const visible = useVisible(() => document.querySelector('#demo2'));
  console.log(visible);
  return (
    <div>
      <div style={{ height: 200, width: 200, overflow: 'scroll' }}>
        <div id="demo2">observer dom</div>
        <div style={{ height: 300 }}></div>
      </div>
      <p>{visible ? 'visible' : 'hidden'}</p>
    </div>
  );
};
