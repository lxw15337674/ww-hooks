import React, { useState } from 'react';
// import { useQuery } from 'wwhooks';
import useQuery from '../';

interface Params {
  a: number;
}
let number = 0;
export default () => {
  const [requestCount, setRequestCount] = useState(0);
  const request = useQuery<Params>({
    url: 'https://getman.cn/mock/test2',
    manual: true,
    onSuccess: () => {
      setRequestCount((state) => ++state);
    },
  });
  return (
    <div>
      <p>params:{JSON.stringify(request.params)}</p>
      <p>data:{JSON.stringify(request.data)}</p>
      <p>loading:{JSON.stringify(request.loading)}</p>
      <p>error:{JSON.stringify(request.error?.message)}</p>
      <p>requestCount:{requestCount}</p>
      <button
        onClick={() => {
          request.setParams({ a: ++number });
        }}
      >
        run
      </button>
    </div>
  );
};
