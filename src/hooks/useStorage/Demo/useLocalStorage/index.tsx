/**
 * title: 基本用法
 * desc:
 */
import React from 'react';
import { useLocalStorage } from 'wwhooks';

export default () => {
  const [state, setState] = useLocalStorage('string', '123');
  console.log(state);
  return (
    <div>
      <input
        value={state || ''}
        onChange={(e) => {
          const value = e.target.value;
          setState(value);
        }}
      />

      <button onClick={() => setState()}>clear</button>
    </div>
  );
};
