import React from 'react';
import { useBoolean } from '@qunhe/budget-hooks';

export default () => {
  const [boolean, setBoolean] = useBoolean(true);
  return (
    <div>
      <p>state:{boolean.toString()}</p>
      <p>
        <button type="button" onClick={() => setBoolean()}>
          toggle
        </button>
      </p>

      <p>
        <button type="button" onClick={() => setBoolean(true)}>
          Set true
        </button>
        <button type="button" onClick={() => setBoolean(false)}>
          Set false
        </button>
      </p>
    </div>
  );
};
