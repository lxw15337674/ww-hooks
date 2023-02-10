/**
 *
 * title: 基本用法
 * description: |
 *  简单示例
 *
 */
import { useUpdate } from 'wwhooks';
import React from 'react';

const test = () => {
  const update = useUpdate();
  return (
    <>
      Time: {Date.now()}
      <p>
        <button onClick={update}>update</button>
      </p>
    </>
  );
};
export default test;
