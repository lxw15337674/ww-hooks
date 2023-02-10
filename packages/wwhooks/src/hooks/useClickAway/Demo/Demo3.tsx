/**
 *
 * title: 滚动条点击
 * description: |
 *  点击任何区域的滚动条都不会触发click，如果需要触发需改为使用mousedown。
 *
 */
import React, { useRef, useState } from 'react';
import { useClickAway } from 'wwhooks';

const Demo = () => {
  const ref = useRef(null);
  const [count, setCount] = useState(0);
  useClickAway(
    ref,
    (e) => {
      setCount((v) => ++v);
    },
    ['mousedown'],
  );

  return (
    <div>
      <button type="button">click away count:{count}</button>
      <div style={{ height: 500, width: 500, overflow: 'auto' }} ref={ref}>
        <div style={{ height: 1000, width: 1000 }} />
      </div>
    </div>
  );
};
export default Demo;
