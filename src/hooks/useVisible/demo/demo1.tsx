/**
 * title: 基础用法
 * desc: 使用 ref 监听
 */

import React, { useRef, useState } from 'react';
import { useVisible } from 'wwhooks';

export default () => {
  const ref = useRef();
  const visible = useVisible(ref);
  const [isTop, setIsTopRef] = useState(false);
  return (
    <div>
      <div style={{ height: 200, width: 200, overflow: 'scroll' }}>
        <div ref={isTop ? ref : undefined}>Top </div>
        <div style={{ height: 300 }}></div>
        <div ref={isTop ? undefined : ref}>bottom </div>
      </div>
      <p>
        <button onClick={() => setIsTopRef((v) => !v)}>toggleRef</button>
        <p>visible:{visible.toString()}</p>
        <p>ref:{isTop ? 'top' : 'bottom'}</p>
      </p>
    </div>
  );
};
