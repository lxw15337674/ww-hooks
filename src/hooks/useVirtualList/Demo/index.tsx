import React, { useRef } from 'react';
import useVirtualList from '..';

const mockInt = () => {
  return Math.ceil(Math.random() * 1000).toString();
};
const mockList = [];
let key = 0;
for (let i = 0; i < 100000; i++) {
  const value = mockInt();
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
    itemHeight: (index) => {
      return 50;
    },
  });
  return (
    <div ref={containerRef} style={{ height: 400, overflow: 'auto' }}>
      <div style={wrapperStyle}>
        {cells.map((row, index) => {
          return (
            <div key={index} style={{ height: 50 }}>
              {row.value}
            </div>
          );
        })}
      </div>
    </div>
  );
};
