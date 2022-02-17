import { InputNumber } from 'antd';
import React, { useRef, useState } from 'react';
import useDynamicList from '..';

const mockInt = (minNum, maxNum) => {
  return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
};
const mockList = [];
let key = 0;
for (let i = 0; i < 99999; i++) {
  const value = mockInt(20, 50);
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
  } = useDynamicList(mockList, {
    containerRef,
    itemHeight: (item) => {
      return item.value;
    },
  });
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
                  ...cell.style,
                }}
              >
                <div style={{ marginRight: 20 }}>index : {cell.index}</div>
                <div>height : {cell.data.value}</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
