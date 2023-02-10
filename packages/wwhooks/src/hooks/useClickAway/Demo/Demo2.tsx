/**
 *
 * title: 改变ref
 * description: |
 *  支持改变ref
 *
 */
import React, { useRef, useState } from 'react';
import { useClickAway } from 'wwhooks';

const Demo = () => {
  const ref = useRef(null);
  const [count, setCount] = useState(0);
  useClickAway(ref, () => {
    setCount((v) => ++v);
  });

  return (
    <div>
      <button id="button1"> button1</button>
      <button id="button2">button2</button>
      <button
        onClick={() => {
          if (ref.current?.id === 'button2') {
            ref.current = document.getElementById('button1');
          } else {
            ref.current = document.getElementById('button2');
          }
        }}
      >
        switch click
      </button>
      <p>current ref button {ref.current?.id}</p>
      <p>click away count:{count}</p>
    </div>
  );
};
export default Demo;
