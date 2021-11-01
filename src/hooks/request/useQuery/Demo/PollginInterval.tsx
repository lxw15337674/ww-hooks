import React, { useState } from 'react';
// import { useQuery } from 'wwhooks';
import useQuery from '../';

export default () => {
  const [requestCount, setRequestCount] = useState(0);
  const request = useQuery({
    url: 'https://getman.cn/mock/test2',
    pollingInterval: 1000,
    manual: true,
    onSuccess: (res) => {
      console.log(res);
      setRequestCount((state) => ++state);
      request.cancel();
    },
    onError: () => {
      setRequestCount((state) => ++state);
    },
    params: {
      id: 2,
    },
  });
  return (
    <div>
      <p>data:{JSON.stringify(request.data)}</p>
      <p>loading:{JSON.stringify(request.loading)}</p>
      <p>error:{JSON.stringify(request.error?.message)}</p>
      <p>requestCount:{requestCount}</p>
      <button
        onClick={() => {
          request.setParams({ a: 2 });
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
    </div>
  );
};
