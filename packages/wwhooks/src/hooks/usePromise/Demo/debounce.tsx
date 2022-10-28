/**
 *
 * title: 防抖

 */
import React, { useState } from 'react';
import { getData } from './api';
import { usePromise } from 'wwhooks';

export default () => {
  const [count, setCount] = useState(0);
  const request = usePromise(getData, {
    manual: true,
    onSuccess: () => {
      setCount((v) => ++v);
    },
    debounceInterval: 1000,
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
