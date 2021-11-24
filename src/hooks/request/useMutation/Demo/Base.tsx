/**
 *
 * title: 基本用法
 * desc: |
 *  基本用法
 *
 */
import React, { useState } from 'react';
import useMutation from '..';
// import { useMutation } from 'wwhooks';

export default () => {
  const [requestCount, setRequestCount] = useState(0);

  const request = useMutation<number[]>({
    url: 'https://getman.cn/mock/test2',
    data: { data: 'data' },
    onSuccess: () => {
      setRequestCount((v) => ++v);
      console.log(requestCount);
    },
    onError: () => {
      setRequestCount((v) => ++v);
      console.log(requestCount);
    },
  });
  return (
    <div>
      <p>params:{JSON.stringify(request.params)}</p>
      <p>data:{JSON.stringify(request.data)}</p>
      <p>loading:{JSON.stringify(request.isLoading)}</p>
      <p>error:{JSON.stringify(request.error?.message)}</p>
      <p>requestCount:{requestCount}</p>
      {/* // TODO: 不能传递数组，setParams改为run */}
      <button
        onClick={() =>
          request.run([1, 2, 3]).then((res) => {
            console.log(res);
          })
        }
      >
        number++
      </button>
    </div>
  );
};
