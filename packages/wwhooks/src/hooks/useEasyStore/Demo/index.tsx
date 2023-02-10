/**
 *
 * title: 基本用法
 * description: |
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

const UserContext = createContext(null);
export interface IState {
  theme: string;
}
const initState: IState = {
  theme: 'dark',
};

export type Action = { type: 'fresh' };

interface Context {
  state: IState;
  dispatch: Dispatch<Action>;
}

const reducer = (state: IState, action) => {
  switch (action.type) {
    case 'changeTheme':
      return {
        ...state,
        theme: action.value,
      };
    default:
      return state;
  }
};

function Component1() {
  let [state, dispatch] = useReducer(reducer, initState);
  console.log(UserContext);
  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>
        <h1>{`Hello ${state.theme}!`}</h1>
        <input
          defaultValue={state.theme}
          onChange={(e) =>
            dispatch({ type: 'changeTheme', value: e.target.value })
          }
        ></input>
      </UserContext.Provider>
      <UserContext.Provider value={{ state, dispatch }}>
        <h1>{`Hello ${state.theme}!`}</h1>
        <input
          defaultValue={state.theme}
          onChange={(e) =>
            dispatch({ type: 'changeTheme', value: e.target.value })
          }
        ></input>
        <Component2 />
      </UserContext.Provider>
    </>
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
  const { state, dispatch } = useContext(UserContext);

  return (
    <>
      <h1>Component 5</h1>
      <input
        defaultValue={state.theme}
        onChange={(e) =>
          dispatch({ type: 'changeTheme', value: e.target.value })
        }
      ></input>
      <h2>{`Hello ${state.theme} again!`}</h2>
    </>
  );
}
export default Component1;
