/**
 *
 * title: 基本用法
 * description: |
 *  简单示例
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
      <button ref={ref} type="button">
        click away count:{count}
      </button>
    </div>
  );
};
export default Demo;
