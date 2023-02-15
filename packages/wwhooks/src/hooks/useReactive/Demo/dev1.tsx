/**
 * title: 测试
 * debug: true
 */
import React, { useEffect } from 'react';
import useReactive from '..';
import useUpdate from '../../useUpdate';

const Test = () => {
  const list = useReactive({
    a: [1, 2],
    get b() {
      return [...this.a, ...this.a];
    },
    test() {
      console.log(123);
    },
  });
  const update = useUpdate();
  useEffect(() => {
    console.log('parent', list);
  }, [JSON.stringify(list)]);
  return (
    <div>
      <button onClick={() => list.a.push(list.a.length + 1)}>push</button>
      <button onClick={() => list.a.pop()}>pop</button>
      <button onClick={() => update()}>forceUpdate</button>
      <Children value={list} />
      <Children value={list.b} />
    </div>
  );
};

const Children = ({ value }: { value: any }) => {
  useEffect(() => {
    console.log('children', value);
  }, [JSON.stringify(value)]);

  return <div>{JSON.stringify(value)}</div>;
};
export default Test;
