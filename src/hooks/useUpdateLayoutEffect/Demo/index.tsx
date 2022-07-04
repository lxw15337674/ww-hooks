import React, { useEffect, useState } from 'react';
import { useUpdateLayoutEffect } from 'wwhooks';

export default () => {
  const [depCount, setDepCount] = useState<number>(0);
  const [effectCount, setEffectCount] = useState<number>(0);
  const [updateCount, setUpdateCount] = useState<number>(0);
  useEffect(() => {
    setEffectCount((v) => ++v);
  }, [depCount]);

  useUpdateLayoutEffect(
    (cur, pre) => {
      setUpdateCount((v) => ++v);
      console.log(cur, pre);
    },
    [depCount],
  );

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
