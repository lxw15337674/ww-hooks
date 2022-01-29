/**
 * debug: true
 */
import React, { useMemo, useRef } from 'react';
import useVirtualList from '..';

export default () => {
  const containerRef = useRef();

  const originalList = useMemo(() => Array.from(Array(99999).keys()), []);

  const { list, wrapperStyle } = useVirtualList(originalList, {
    containerRef,
    itemHeight: 60,
    overscan: 10,
  });
  return (
    <div
      ref={containerRef}
      style={{ height: '300px', overflow: 'auto', border: '1px solid' }}
    >
      <div style={wrapperStyle}>
        {list.map((ele) => (
          <div
            style={{
              height: 52,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              border: '1px solid #e8e8e8',
              marginBottom: 8,
            }}
            key={ele.index}
          >
            Row: {ele.data}
          </div>
        ))}
      </div>
    </div>
  );
};
