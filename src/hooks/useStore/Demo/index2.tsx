/**
 *
 * title: 基本用法
 * desc: |
 * 简单示例
 *
 */
import React, {
  createContext,
  Dispatch,
  useContext,
  useReducer,
  useState,
} from 'react';
import initContext from '..';

const UserContext = createContext(null);
export interface IState {
  theme: string;
}
const initialState: IState = {
  theme: 'dark',
};

const { Context, useStore } = initContext({ initialState: initialState });

function Component1() {
  return (
    <Context>
      <Component2 />
    </Context>
  );
}

function Component2() {
  const { state, setState } = useStore();
  return (
    <>
      <h1>Component 2</h1>
      <input
        value={state.theme}
        onChange={(e) => setState({ theme: e.target.value })}
      ></input>
      <Component3 />
    </>
  );
}

function Component3() {
  return (
    <>
      <h1>Component 3</h1>
      <Component4 />
    </>
  );
}

function Component4() {
  return (
    <>
      <h1>Component 4</h1>
      <Component5 />
    </>
  );
}

function Component5() {
  const { state, setState } = useStore();
  return (
    <>
      <h1>Component 5</h1>
      <input
        value={state.theme}
        onChange={(e) => setState({ theme: e.target.value })}
      ></input>
      <h2>{`Hello ${state.theme} again!`}</h2>
    </>
  );
}
export default Component1;
