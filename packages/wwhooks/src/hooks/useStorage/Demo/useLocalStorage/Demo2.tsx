/**
 * title: 存储复杂类型数据
 * description:
 */
import React from 'react';
import { useLocalStorage } from '../..';

export default () => {
  const [state, setState] = useLocalStorage('array', ['1', '2', '3']);

  return (
    <div>
      {state.map((item, index) => (
        <p key={index}>
          <input
            value={item}
            onChange={(e) => {
              const value = e.target.value;
              setState((list) => {
                const nextList = [...list];
                nextList[index] = value;
                return nextList;
              });
            }}
          />
        </p>
      ))}
    </div>
  );
};
