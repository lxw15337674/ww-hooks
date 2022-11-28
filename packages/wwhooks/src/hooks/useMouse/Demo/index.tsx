/**
 *
 * title: 基本用法
 * desc: |
 * 简单示例
 *
 */
import React, { useState } from 'react';
import useMouse from '..';
const test = () => {
  const state = useMouse();
  return (
    <div>
      <p>
        client: {state.clientX}, {state.clientY}
      </p>
      <p>
        page: {state.pageX}, {state.pageY}
      </p>
      <p>
        screen: {state.screenX}, {state.screenY}
      </p>
    </div>
  );
};
export default test;
