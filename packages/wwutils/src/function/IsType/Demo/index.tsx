import React from 'react';
import { isType } from 'wwutils';

const App = () => {
  const log = JSON.stringify;
  const text = 'test';
  const isString = isType<string>(text, 'string');
  const array = new Array(1, 2, 3);
  const isArray = isType<any[]>(array, 'array');
  return (
    <>
      <p>{log(isString)}</p>
      <p>{log(isArray)}</p>
    </>
  );
};

export default App;
