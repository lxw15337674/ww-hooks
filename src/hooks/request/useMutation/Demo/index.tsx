/**
 *
 * title: 依赖请求
 * desc: |
 *  配置`deps`参数，当deps变化，就会触发`run`执行
 *
 */
import React, { useState } from 'react';
import useMutation from '..';
// import { useQuery } from 'wwhooks';

export default () => {
  const [requestCount, setRequestCount] = useState(0);

  const request = useMutation({
    url: 'https://getman.cn/mock/test2',
    manual: true,
    onSuccess: () => {
      setRequestCount((state) => ++state);
    },
  });
  return (
    <div>
      <p>data:{JSON.stringify(request.data)}</p>
      <p>loading:{JSON.stringify(request.isLoading)}</p>
      <p>error:{JSON.stringify(request.error?.message)}</p>
      <p>requestCount:{requestCount}</p>
      <button
        onClick={() => {
          request;
        }}
      >
        number++
      </button>
    </div>
  );
};
