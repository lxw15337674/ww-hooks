import React from 'react';
import setDefaultArguments from '../index';

interface Obj {
  a?: string;
  b?: string;
}

interface Fn {
  (a: Obj, c: string[], d: { a: string[] }): void;
}

export default () => {
  const fn: Fn = (...args) => {
    console.log(...args);
  };
  const wrapperFn = setDefaultArguments<Fn, Parameters<Fn>>(
    fn,
    { a: '2' },
    ['2'],
    {
      a: ['2'],
    },
  );
  return (
    <p>
      <button onClick={() => wrapperFn({ b: '1' }, ['1'], { a: ['1'] })}>
        点击
      </button>
    </p>
  );
};
