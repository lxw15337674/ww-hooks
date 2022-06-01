/**
 * title: 基本用法
 * desc: 通过ref监听节点变化
 */
import React from 'react';
import useWindowIsScroll from '..';

export default () => {
  const isScrollState = useWindowIsScroll();

  return (
    <>
      <p>x : {isScrollState.x.toString()}</p>
      <p>y : {isScrollState.y.toString()}</p>
    </>
  );
};
