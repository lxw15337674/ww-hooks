/**
 * debug: true
 */
import React from 'react';
import useReactive from '..';

export default () => {
  const state = useReactive({
    list: [{ name: '小王' }, { name: '小张' }],
  });

  const changeList = () => {
    state.list = [...state.list];
    state.list = [...state.list.map((v) => ({ name: v.name }))];
  };

  const changeName = () => {
    state.list[0].name = '随机' + Math.random();
  };

  return (
    <div>
      <button onClick={changeList}>改变数据</button>
      <button onClick={changeName}>改名</button>
      <div>{JSON.stringify(state.list.map((v) => v.name))}</div>
    </div>
  );
};
