import React from 'react';
import { useReactive } from 'wwhooks';

export default () => {
  const state = useReactive({
    list: [{ name: Math.random() }],
  });

  const changeName = () => {
    state.list[0].name = Math.random();
  };

  return (
    <div>
      <button onClick={changeName}>改变数据</button>
      <div>{JSON.stringify(state.list.map((v) => v.name))}</div>
    </div>
  );
};
