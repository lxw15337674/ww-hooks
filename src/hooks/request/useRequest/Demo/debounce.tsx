import React, { useState } from 'react';
import useRequest from '..';
// import { useRequest } from 'wwhooks';

let requestCount = 0;
export default () => {
  const request = useRequest({
    url: 'https://getman.cn/mock/test2',
    manual: true,
    onSuccess: (data) => {
      ++requestCount;
    },
    debounce: { wait: 1000 },
  });
  return (
    <div>
      <p>data:{JSON.stringify(request.data)}</p>
      <p>loading:{JSON.stringify(request.loading)}</p>
      <p>error:{JSON.stringify(request.error?.message)}</p>
      <p>requestCount:{requestCount}</p>
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
