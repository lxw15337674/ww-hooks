import React, { useRef } from 'react';
import useVirtualTable from '..';

const mockInt = () => {
  return Math.ceil(Math.random() * 1000).toString();
};
const mockList = [];
let key = 0;
for (let i = 0; i < 100; i++) {
  const list = [];
  for (let i = 0; i < 100; i++) {
    const value = mockInt();
    key++;
    list.push({
      value,
      key,
    });
  }
  mockList.push(list);
}

export default () => {
  const containerRef = useRef();
  const { list: cells, wrapperProps } = useVirtualTable(
    mockList,
    containerRef,
    {
      rowHeight: (index) => {
        return 10;
      },
      colWidth: (index) => {
        return 10;
      },
    },
  );
  return (
    <div ref={containerRef} style={{ height: 400, overflow: 'auto' }}>
      <div {...wrapperProps}>
        {cells.map((row, index) => {
          return (
            <div key={index}>
              {row.map((cell) => {
                return <span key={cell.key}>{cell.value}</span>;
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};
