import React, { useRef } from 'react';
import useDynamicList from '..';

const mockInt = (minNum, maxNum) => {
  return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
};
const mockList = [];
let key = 0;
for (let i = 0; i < 99999; i++) {
  const value = mockInt(10, 300);
  key++;
  mockList.push({
    value,
    key,
  });
}

export default () => {
  const containerRef = useRef<HTMLDivElement>();
  const { list: cells, wrapperStyle } = useDynamicList(mockList, {
    containerRef,
    itemHeight: (item) => {
      return item.value;
    },
  });
  return (
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
                ...cell.style,
              }}
            >
              <div style={{ marginRight: 20 }}>index : {cell.index}</div>
              <div>height : {cell.data.value}</div>
              <button
                onClick={() => {
                  console.log(cell.index);
                }}
              >
                {cell.data.value}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
