import React, { useState } from 'react';
import { useAxios } from 'wwhooks';

export default () => {
  const [count, setCount] = useState(0);
  const request = useAxios({
    url: 'https://getman.cn/mock/test2',
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
          request.reload();
          request.reload();
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
