import React, { useState } from 'react';
import usePromise from '..';
import { getData } from './api';

export default () => {
  const [count, setCount] = useState(0);
  const request = usePromise(getData, {
    manual: true,
    onSuccess: (data) => {
      setCount((v) => ++v);
    },
    throttleInterval: 10000,
  });

  return (
    <div>
      <p>data:{JSON.stringify(request.data)}</p>
      <p>loading:{JSON.stringify(request.isLoading)}</p>
      <p>error:{JSON.stringify(request.error?.message)}</p>
      <p>requestCount:{count}</p>
      <button
        onClick={() => {
          request.run();
          request.run();
          request.run();
        }}
      >
        request
      </button>
      <button
        onClick={() => {
          request.cancel();
        }}
      >
        cancel
      </button>
      <button
        onClick={() => {
          request.flush();
        }}
      >
        flush
      </button>
    </div>
  );
};
