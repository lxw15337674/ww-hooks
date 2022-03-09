/**
 * title: 测试
 * debug: true
 */
import React, { useEffect, useState } from 'react';
import { useReactive } from 'wwhooks';

const Test = () => {
  const list = useReactive([1, 2]);
  return (
    <div>
      <button onClick={() => list.push(list.length + 1)}>push</button>
      <button onClick={() => list.pop()}>pop</button>
      <div>{JSON.stringify(list)}</div>
    </div>
  );
};
export default Test;
