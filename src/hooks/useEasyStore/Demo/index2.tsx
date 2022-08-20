/**
 *
 * title: 基本用法
 * desc: |
 * 简单示例
 *
 */
import React, { createContext } from 'react';
import initContext from '..';

const UserContext = createContext(null);
export interface IState {
  theme: string;
}
const initialState: IState = {
  theme: 'dark',
};

const { Provider, useStore } = initContext(initialState);

function Component1() {
  return (
    <Provider>
      <Component2 />
    </Provider>
  );
}

function Component2() {
  console.log('Component2 render');
  return (
    <>
      <h1>Component 2</h1>
      <Component3 />
    </>
  );
}

function Component3() {
  const { store, setStore } = useStore((store) => store);
  console.log('Component3 render');
  return (
    <>
      <h1>Component 3</h1>
      <input
        value={store.theme}
        onChange={(e) => setStore({ theme: e.target.value })}
      ></input>
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
  const { store, setStore } = useStore((store) => store);
  console.log('Component5 render');

  return (
    <>
      <h1>Component 5</h1>
      <input
        value={store.theme}
        onChange={(e) => setStore({ theme: e.target.value })}
      ></input>
      <h2>{`Hello ${store.theme} again!`}</h2>
    </>
  );
}
export default Component1;
