import React, { useState } from 'react';
import { useUrlState } from 'wwhooks';

export default () => {
  const [state, actions] = useUrlState({ count: '1', test: '2' });
  console.log(Array.from(state));
  return (
    <>
      <button
        onClick={() => actions.set('count', (data) => `${data}1`)}
      >
        add
      </button>
      <button onClick={() => actions.set('count', undefined)}>
        remove count
      </button>
      <button onClick={() => actions.clear()}>
        clear
      </button>
      <div>state:{state.get('count')}</div>
    </>
  );
};
