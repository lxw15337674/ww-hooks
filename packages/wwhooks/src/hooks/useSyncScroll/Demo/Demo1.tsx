/**
 * title: 基本用法
 * description: 通过ref监听节点变化
 */
import React, { forwardRef, useRef, useState } from 'react';
import { useSyncScroll } from 'wwhooks';

const Box = forwardRef<HTMLDivElement, { color: string }>(({ color }, ref) => {
  return (
    <div
      ref={ref}
      style={{
        height: 400,
        width: 400,
        overflow: 'auto',
        border: '1px solid ',
        borderColor: color,
        marginRight: 10,
      }}
    >
      <div style={{ height: 1000, width: 1000 }}>box</div>
    </div>
  );
});

const Test = (props) => {
  const redBoxRef = useRef<HTMLDivElement>();
  const BlueBoxRef = useRef<HTMLDivElement>();
  const BoxRef = useRef<HTMLDivElement>();
  const [attribute, setAttribute] = useState('both');
  useSyncScroll([redBoxRef, BlueBoxRef, BoxRef], attribute);
  return (
    <>
      <button onClick={() => setAttribute('both')}>both</button>
      <button onClick={() => setAttribute('left')}>left</button>
      <button onClick={() => setAttribute('top')}>top</button>
      <p>attribute:{attribute}</p>
      <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
        <Box ref={redBoxRef} color="red" />
        <Box ref={BlueBoxRef} color="blue" />
        <Box ref={BoxRef} color="BoxRef" />
      </div>
    </>
  );
};
export default Test;
