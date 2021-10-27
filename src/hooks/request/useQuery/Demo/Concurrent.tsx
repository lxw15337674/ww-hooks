import React, { useState } from 'react';
// import { useQuery } from '..';
import useQuery from '..';

export default () => {
  const [requestCount, setRequestCount] = useState(0);
  const request = useQuery({
    url: 'https://getman.cn/mock/test2',
    concurrent: false,
    onSuccess: (data) => {
      setRequestCount((state) => ++state);
    },
    onError: (err) => {
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
          for (var i = 0; i < 5; i++) {
            request.run();
          }
        }}
      >
        request
      </button>
    </div>
  );
};
