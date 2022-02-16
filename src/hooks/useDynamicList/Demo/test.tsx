/**
 * debug: true
 */
import React, { useEffect, useRef } from 'react';
import useDynamicList from '..';
import autoScroll from '../../../common/autoScroll';
import { faker } from '@faker-js/faker';
import { Button } from 'antd';

const mockInt = (minNum, maxNum) => {
  return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
};
const mockList = [];
let key = 0;
for (let i = 0; i < 1000; i++) {
  // const value = mockInt(30, 200);
  const value = 30;
  key++;
  mockList.push({
    value,
    key,
    email: faker.internet.email(),
    words: faker.lorem.words(),
    paragraphs: faker.lorem.sentences(),
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
  useEffect(() => {
    autoScroll(containerRef.current);
  }, []);
  return (
    <div ref={containerRef} style={{ height: 400, overflow: 'auto' }}>
      <div style={wrapperStyle}>
        {cells.map((cell) => {
          return (
            <div
              key={cell.id}
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
              <p>${cell.data.email}</p>
              <p>${cell.data.words}</p>
              <p>${cell.data.paragraphs}</p>
              <button>123</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
