import React, { useEffect, useState } from 'react';
import useReactive from '..';

const Test = () => {
  let list = useReactive({ a: '' });
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount((v) => v + 1);
    console.log(list.a);
  }, [list.a]);
  console.log(list.a);
  return (
    <div>
      <input
        onChange={(e) => {
          list.a = e.target.value;
        }}
      />
      <p>
        <div>{JSON.stringify(list)}</div>
        <div>{count}</div>
      </p>
    </div>
  );
};
export default Test;
