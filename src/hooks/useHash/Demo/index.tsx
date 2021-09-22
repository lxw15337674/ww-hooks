import React from 'react';
import { useHash } from 'wwhooks';

export default () => {
  const [state, setState, reset] = useHash('123');
  return (
    <>
      <div>state: {JSON.stringify(state)}</div>
      <button
        type="button"
        onClick={() => setState((prev) => `${prev ?? ''}1`)}
      >
        add
      </button>
      <button type="button" onClick={reset}>
        reset
      </button>
      <button type="button" onClick={() => setState(null)}>
        clear
      </button>
    </>
  );
};
