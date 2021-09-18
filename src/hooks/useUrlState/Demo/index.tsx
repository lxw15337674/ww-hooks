import React from 'react';
import { useUrlState, useToggle } from 'wwhooks';

export default () => {
  const [navigateMode, { toggle }] = useToggle<'push' | 'replace'>('push', 'replace');
  const [state, actions] = useUrlState({ count: '1', test: '2' }, navigateMode);
  return (
    <>
      <p>state:{state.get('count')}</p>
      <p>navigateMode:{navigateMode}</p>
      <p>

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
      </p>
      <p>
        <button onClick={() => { toggle() }}>toggle navigateMode</button>
      </p>
    </>
  );
};
