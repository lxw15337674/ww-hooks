/**
 * debug: true
 */
import autoScroll from '@/common/autoScroll';
import React, { useEffect, useRef } from 'react';
import useVirtualList from '..';
import { faker } from '@faker-js/faker';
import { Button } from 'antd';

const mockList = [];
let key = 0;
for (let i = 0; i < 1000; i++) {
  const value = 30;
  key++;
  mockList.push({
    value,
    key,
    email: faker.internet.email(),
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
  useEffect(() => {
    autoScroll(containerRef.current);
  }, []);
  return (
    <>
      <button></button>
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
                <div style={{ marginRight: 20 }}>index : {cell.index}</div>
                <div>height : {cell.data.value}</div>
                <p>${cell.data.email}</p>
                <Button>123</Button>
                <Button>123</Button>
                <Button>123</Button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
