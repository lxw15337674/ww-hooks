/**
 *
 * title: 基本用法
 * desc: |
 * 简单示例
 *
 */
import useNumber from '@/hooks/useNumber';
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
function useCounter() {
  const [store, setStore] = useState(initialState);
  return {
    store,
    setStore,
  };
}
const { Provider, useStore } = initContext(useCounter);

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
  const { store } = useStore((store) => store);
  return (
    <>
      <h1>Component 3</h1>
      {store.theme}
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
  console.log(store);
  return (
    <>
      <h1>Component 5</h1>
      {store.theme}
      <button type="button" onClick={() => setStore({ theme: 'red' })}>
        red
      </button>
      <button type="button" onClick={() => setStore({ theme: 'yellow' })}>
        yellow
      </button>
    </>
  );
}
export default Component1;
