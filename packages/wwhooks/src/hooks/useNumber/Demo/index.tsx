/**
 *
 * title: 基本用法
 * desc: 简单示例
 *
 */
import React, { useState } from 'react';
import { useNumber } from 'wwhooks';

const test = () => {
  const [num, action] = useNumber(0);
  return (
    <div>
      {num}
      <div>
        <button onClick={() => action.plus(2)}>plus2</button>
        <button onClick={() => action.minus(1)}>minus1</button>
        <button onClick={() => action.set(100)}>set100</button>
        <button onClick={action.reset}>reset</button>
      </div>
    </div>
  );
};
export default test;
