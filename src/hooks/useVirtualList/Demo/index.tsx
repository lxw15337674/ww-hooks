import React, { useRef } from 'react';
import useVirtualList from '..';

const mockInt = (minNum, maxNum) => {
  return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
};
const mockList = [];
let key = 0;
for (let i = 0; i < 99999; i++) {
  const value = mockInt(20, 100);
  key++;
  mockList.push({
    value,
    key,
  });
}

export default () => {
  const containerRef = useRef<HTMLDivElement>();
  const { list: cells, wrapperStyle } = useVirtualList(mockList, {
    containerRef,
    itemHeight: (item) => {
      return item.value;
    },
  });
  return (
    <div ref={containerRef} style={{ height: 400, overflow: 'auto' }}>
      <div style={wrapperStyle}>
        {cells.map((cell) => {
          return (
            <div
              key={cell.data.key}
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
  );
};
