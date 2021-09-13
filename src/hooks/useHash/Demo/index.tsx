import React from 'react';
import { useHash } from 'wwhooks';

//TODO
export default () => {
  const [state, setState, reset] = useHash('test');

  return (
    <>
      <button
        style={{ marginRight: 8 }}
        type="button"
        onClick={() => setState((prev) => `${prev}1`)}
      >
        add
      </button>
      <button type="button" onClick={reset}>
        reset
      </button>
      <div>state: {state}</div>
    </>
  );
};
