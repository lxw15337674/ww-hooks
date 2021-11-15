/**
 *
 * title: 轮询
 * desc: |
 *  通过设置 `options.pollingInterval` ，进入轮询模式，定时触发函数执行。
 *  - 通过 `run` / `cancel` 来 开启/停止 轮询。
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
