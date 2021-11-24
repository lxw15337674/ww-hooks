/**
 *
 * title: 基本用法
 * desc: |
 *  - 通过`setParams`修改参数，自动触发请求
 *  - 直接调用run方法请求。
 *
 */
import React, { useState } from 'react';
import { useQuery } from 'wwhooks';

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
      <p>loading:{JSON.stringify(request.isLoading)}</p>
      <p>error:{JSON.stringify(request.error?.message)}</p>
      <p>requestCount:{requestCount}</p>
      <button
        onClick={() => {
          request.run({ a: ++number });
        }}
      >
        a+1
      </button>
      <button
        onClick={() => {
          request.run();
        }}
      >
        run
      </button>
    </div>
  );
};
