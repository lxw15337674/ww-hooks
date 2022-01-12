import React from 'react';
import { useToggle } from 'wwhooks';

export default () => {
  const [state, toggleState] = useToggle('left', 'right');
  return (
    <div>
      <p>state:{state.toString()}</p>
      <p>
        <button type="button" onClick={() => toggleState()}>
          toggle
        </button>
      </p>
    </div>
  );
};
