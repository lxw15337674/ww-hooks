import React, { useEffect, useState } from 'react';
import { useUpdate } from 'wwhooks';

export default () => {
  const [depCount, setDepCount] = useState<number>(0);
  const [effectCount, setEffectCount] = useState<number>(0);
  const [updateCount, setUpdateCount] = useState<number>(0);
  const [object] = useState({
    a: '1',
    b: '2'
  });

  useEffect(() => {
    setEffectCount((v) => ++v);
  }, [depCount]);

  useUpdate(() => {
    setUpdateCount((v) => ++v);
  }, [depCount]);

  return (
    <>
      <p>effectCount: {effectCount}</p>
      <p>updateCount: {updateCount}</p>
      <p>
        <button onClick={() => setDepCount((c) => ++c)}>update Deps</button>
      </p>
    </>
  );
};
