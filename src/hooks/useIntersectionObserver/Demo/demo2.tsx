/**
 * title: 传入dom用法
 * desc: 支持改变target
 */
import React, { useRef, useState } from 'react';
import { useIntersectionObserver, useToggle } from 'wwhooks';

export default () => {
  const [id, toggleId] = useToggle('top', 'bottom');
  const [visible, setVisible] = useState(false);
  useIntersectionObserver(
    () => document.getElementById(id),
    (entry) => {
      setVisible(entry.isIntersecting);
    },
  );

  return (
    <div>
      <div style={{ height: 200, width: 200, overflow: 'scroll' }}>
        <div id="top">Top </div>
        <div style={{ height: 300 }}></div>
        <div id="bottom">bottom </div>
      </div>
      <div>
        <button onClick={() => toggleId()}>toggleRef</button>
        <p>visible:{visible.toString()}</p>
        <p>id:{id}</p>
      </div>
    </div>
  );
};
