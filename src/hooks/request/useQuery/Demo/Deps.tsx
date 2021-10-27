import React, { useState } from 'react';
import { useQuery } from 'wwhooks';

export default () => {
  const [number, setNumber] = useState(0);
  const [requestCount, setRequestCount] = useState(0);

  const request = useQuery({
    url: 'https://getman.cn/mock/test2',
    manual: true,
    onSuccess: () => {
      setRequestCount((state) => ++state);
    },
    deps: [number],
  });
  return (
    <div>
      <p>data:{JSON.stringify(request.data)}</p>
      <p>loading:{JSON.stringify(request.loading)}</p>
      <p>error:{JSON.stringify(request.error?.message)}</p>
      <p>requestCount:{requestCount}</p>
      <p>number:{number}</p>
      <button
        onClick={() => {
          setNumber((number) => ++number);
        }}
      >
        number++
      </button>
    </div>
  );
};
