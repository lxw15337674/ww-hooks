/**
 *
 * title: 基本用法
 * desc: |
 *  test
 *
 */
import React, { useState } from 'react';
const test = (props) => {
  const [map, setMap] = useState<Map<any, any>>(new Map([[1, 2]]));
  console.log(map);
  return (
    <>
      <p>{Array(map)}</p>
      <p>
        <button
          onClick={() => {
            const newMap = map.set('key', 'value');
            console.log(newMap);
            setMap(newMap);
          }}
        >
          add
        </button>
      </p>
    </>
  );
};
export default test;
