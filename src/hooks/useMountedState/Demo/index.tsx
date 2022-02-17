import React, { useState } from 'react';
import { useBoolean, useUnmount, useMountedState } from 'wwhooks';

// 不会出现内存泄漏
const Component = () => {
  const [state, setState] = useState('mounted');
  const mounted = useMountedState();
  useUnmount(() => {
    setTimeout(() => {
      mounted() && setState('Unmount');
    }, 1000);
  });
  return <input value={state} onChange={(e) => setState(e.target.value)} />;
};

export default () => {
  const [state, toggle] = useBoolean(true);
  return (
    <>
      <p>
        <button onClick={() => toggle()}>{state ? 'unmount' : 'mount'}</button>
      </p>
      {state ? <Component /> : <p>no</p>}
    </>
  );
};
