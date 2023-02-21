/**
 *
 * title: 改变ref
 * desc: |
 *  支持改变ref
 *
 */
import React, { useState } from 'react';
import { useClickAway } from 'wwhooks';

const Demo = () => {
  const [ele, setEle] = useState<any>();
  const [count, setCount] = useState(0);
  useClickAway(ele, () => {
    setCount((v) => ++v);
  });

  return (
    <div>
      <button
        onClick={() => {
          if (ele?.id === 'button1') {
            setEle(document.getElementById('button2'));
          } else {
            setEle(document.getElementById('button1'));
          }
        }}
      >
        toggle ele
      </button>
      <p>
        <button id="button1">button1</button>
        <button id="button2">button2</button>
      </p>
      <p>current ref button {ele?.id ?? 'null'}</p>
      <p>click away count:{count}</p>
    </div>
  );
};
export default Demo;
