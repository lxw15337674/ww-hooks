/**
 * title: 监听浏览器
 * desc: 通过ref监听节点变化
 */
import React, { useRef } from 'react';
import { useIsScroll } from 'wwhooks';

export default () => {
  const isScrollState = useIsScroll(document.body);
  return (
    <>
      窗口状态
      <p>x : {isScrollState.x.toString()}</p>
      <p>y : {isScrollState.y.toString()}</p>
    </>
  );
};
