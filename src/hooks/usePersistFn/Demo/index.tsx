/**
 *
 * title: 基本用法
 * desc: |
 * 简单示例
 *
 */
import { message } from 'antd';
import React, { useState } from 'react';
import { usePersistFn } from 'wwhooks';

const Test = () => {
  const [value, setValue] = useState('');
  const show = usePersistFn((text) => {
    console.log(value);
    message.success(value + text);
  });

  return (
    <div>
      <input onChange={(e) => setValue(e.target.value)} />
      <button onClick={() => show(value)}>usePersistFn</button>
    </div>
  );
};
export default Test;
