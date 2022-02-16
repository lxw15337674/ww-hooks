/**
 * debug: true
 */
import autoScroll from '@/common/autoScroll';
import React, { useEffect, useRef } from 'react';
import useVirtualList from '..';
import { faker } from '@faker-js/faker';
import { Button } from 'antd';
import { useInterval } from '@/';

const mockList = [];
let key = 0;
for (let i = 0; i < 99999; i++) {
  const value = 20;
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
    itemHeight: 10,
  });
  useEffect(() => {
    autoScroll(containerRef.current);
  }, []);
  const { start, clear, looping } = useInterval(() => {
    const dom = containerRef.current;
    if (dom.clientHeight <= dom.scrollTop) {
      clear();
    }
    dom.scrollTop += 100;
  }, 100);
  return (
    <>
      <p>looping:{JSON.stringify(looping)}</p>
      <p>
        <button type="button" onClick={() => start()}>
          start
        </button>
        <button type="button" onClick={() => clear()}>
          clear
        </button>
      </p>
      <div ref={containerRef} style={{ height: 400, overflow: 'auto' }}>
        <div style={wrapperStyle}>
          {cells.map((cell, index) => {
            return (
              <div
                key={index}
                style={{
                  height: 10,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  border: '1px solid #e8e8e8',
                }}
              >
                <div style={{ marginRight: 20 }}>index : {cell.index}</div>
                <div>height : {cell.data.value}</div>
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
