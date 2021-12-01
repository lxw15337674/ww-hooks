import React, { useState } from 'react';
import { useAxios } from 'wwhooks';

export default () => {
  const [count, setCount] = useState(0);
  const request = useAxios({
    url: 'https://getman.cn/mock/test2',
    manual: true,
    onSuccess: (data) => {
      setCount((v) => ++v);
    },
    throttle: { wait: 10000 },
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