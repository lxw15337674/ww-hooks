/**
 * title: 存储复杂类型数据
 * desc:
 */
import React from 'react';
import { useSessionStorage } from '../..';

export default () => {
  const [state, setState] = useSessionStorage('array', ['1', '2', '3']);
  return (
    <div>
      {state?.map((item, index) => (
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
