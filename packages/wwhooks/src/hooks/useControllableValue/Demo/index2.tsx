/**
 *
 * title: 受控组件
 * desc: 如果 props 有 value 字段，则必须由父级通过trigger传递回调函数修改state，useControllableValue自身不会修改state。
 *
 */

import { useControllableValue } from 'wwhooks';
import React, { useState } from 'react';

export default () => {
  // 模拟外部传入value
  const [value, setValue] = useState('');
  const [state, setState] = useControllableValue({ value }, setValue);
  const [value2, setValue2] = useState('');
  const [state2, setState2] = useControllableValue({ value: value2 });

  return (
    <div>
      <p>传递trigger，state会修改</p>
      <input
        value={state}
        onChange={(e) => {
          setState(e.target.value);
        }}
      />
      <p>没有传递trigger，state不会修改</p>
      <input
        value={state2}
        onChange={(e) => {
          setState2(e.target.value);
        }}
      />
    </div>
  );
};
