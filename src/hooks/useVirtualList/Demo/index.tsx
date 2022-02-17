import { InputNumber } from 'antd';
import React, { useRef, useState } from 'react';
import useVirtualList from '..';

const mockList = [];
let key = 0;
for (let i = 0; i < 99999; i++) {
  const value = 30;
  key++;
  mockList.push({
    value,
    key,
  });
}

export default () => {
  const containerRef = useRef<HTMLDivElement>();
  const {
    list: cells,
    wrapperStyle,
    scrollTo,
  } = useVirtualList(mockList, containerRef, 30);
  const [index, setIndex] = useState(0);

  return (
    <>
      <InputNumber onChange={(v) => setIndex(v as number)} />
      <button
        onClick={() => {
          scrollTo(index);
        }}
      >
        scrollTo
      </button>
      <div ref={containerRef} style={{ height: 400, overflow: 'auto' }}>
        <div style={wrapperStyle}>
          {cells.map((cell, index) => {
            return (
              <div
                key={index}
                style={{
                  height: cell.data.value,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  border: '1px solid #e8e8e8',
                }}
              >
                row:{cell.index}:{cell.data.value}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
