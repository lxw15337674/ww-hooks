/**
 *
 * title: 非受控组件
 * desc: 如果 props 中没有 value，则组件内部自己管理 state

 *
 */

import { useControllableValue } from 'wwhooks';
import React from 'react';

export default () => {
  const [state, setState] = useControllableValue({ defaultValue: '123' });
  return (
    <div>
      <p>state:{state}</p>
      <input
        value={state}
        onChange={(e) => {
          setState(e.target.value);
        }}
      />
    </div>
  );
};
