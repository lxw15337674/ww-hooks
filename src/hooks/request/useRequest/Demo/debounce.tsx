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
    debounce: false,
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
        正常的请求
      </button>
    </div>
  );
};
