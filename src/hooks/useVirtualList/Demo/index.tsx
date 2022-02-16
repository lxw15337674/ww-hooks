import { Button } from 'antd';
import React, { useRef } from 'react';
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
  const { list: cells, wrapperStyle } = useVirtualList(mockList, {
    containerRef,
    itemHeight: 30,
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
              }}
            >
              row:{cell.index}:{cell.data.value}
              <Button>123</Button>
              <Button>123</Button>
              <Button>123</Button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
