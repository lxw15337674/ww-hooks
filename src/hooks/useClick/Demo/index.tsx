/**
 *
 * title: 基本用法
 * desc: |
 *  简单示例
 *
 */
import useClick from '../';
import React, { useState } from 'react';

const Demo = () => {
  const [clickCount, setClick] = useState<number>(0);
  const [doubleClickCount, setDoubleClick] = useState<number>(0);
  const [exclusive, setExclusive] = useState<boolean>(false);
  const fn = useClick(
    () => {
      console.log('click');
      setClick((v) => ++v);
    },
    () => {
      setDoubleClick((v) => ++v);
    },
    {
      exclusive,
    },
  );
  return (
    <div>
      <p>clickCount:{clickCount}</p>
      <p>doubleClickCount:{doubleClickCount}</p>
      <p>exclusive:{exclusive.toString()}</p>
      <button onClick={fn}>click</button>
      <button onClick={() => setExclusive((v) => !v)}>toggleExclusive</button>
    </div>
  );
};
export default Demo;
