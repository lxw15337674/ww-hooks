import React, { useState } from 'react';
// import { useQuery } from '..';
import useQuery from '..';

export default () => {
  const [requestCount, setRequestCount] = useState(0);
  const request = useQuery({
    url: 'https://getman.cn/mock/test2',
    manual: true,
    pollingInterval: 1000,
    onSuccess: () => {
      setRequestCount((state) => ++state);
      request.cancel();
    },
    onError: () => {
      setRequestCount((state) => ++state);
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
          request.run().then((res) => {
            console.log(res);
          });
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
