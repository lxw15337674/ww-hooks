import React from 'react';
import { useBoolean } from 'wwhooks';

export default () => {
  const [state, { toggle, setTrue, setFalse }] = useBoolean(true);
  return (
    <div>
      <p>state:{state.toString()}</p>

      <p>
        <button type="button" onClick={() => toggle()}>
          toggle
        </button>
      </p>

      <p>
        <button type="button" onClick={setTrue} className="mx-5">
          Set true
        </button>
        <button type="button" onClick={setFalse}>
          Set false
        </button>
      </p>
    </div>
  );
};
