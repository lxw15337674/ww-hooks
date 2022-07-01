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
import { Store, useStore } from '..';

const UserContext = createContext(null);
export interface IState {
  theme: string;
}
const initialState: IState = {
  theme: 'dark',
};

function Component1() {
  return (
    <Store initialState={initialState}>
      {(state, setState) => {
        return (
          <>
            <h1>{`Hello ${state.theme}!`}</h1>
            <input
              defaultValue={state.theme}
              onChange={(e) => setState({ theme: e.target.value })}
            ></input>
            <Component2 />
          </>
        );
      }}
    </Store>
  );
}

function Component2() {
  return (
    <>
      <h1>Component 2</h1>
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
  const { state } = useContext(UserContext);

  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${state.theme} again!`}</h2>
    </>
  );
}
export default Component1;
