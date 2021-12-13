/**
 * title: 用法
 * desc: 相对于窗口是否可见
 */
import React, { useRef, useState } from 'react';
import { useIntersectionObserver } from 'wwhooks';

export default () => {
  const ref = useRef();
  const [visible, setVisible] = useState(false);
  useIntersectionObserver(ref, (entry) => {
    setVisible(entry.isIntersecting);
  });
  return (
    <div>
      <div style={{ height: 200, width: 200, overflow: 'scroll' }}>
        <div ref={ref}>Top </div>
        <div style={{ height: 300 }}></div>
      </div>
      <p>
        <p>visible:{visible.toString()}</p>
      </p>
    </div>
  );
};
