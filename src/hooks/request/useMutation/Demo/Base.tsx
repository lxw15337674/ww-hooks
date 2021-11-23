/**
 *
 * title: 基本用法
 * desc: |
 *  基本用法
 *
 */
import axios from 'axios';
import React, { useState } from 'react';
import { useMutation } from 'wwhooks';

export default () => {
  const [requestCount, setRequestCount] = useState(0);

  const request = useMutation({
    url: 'https://getman.cn/mock/test2',
    defaultParams: {
      test: '123',
    },
    params: {
      data: '123',
    },
  });
  return (
    <div>
      <p>data:{JSON.stringify(request.data)}</p>
      <p>loading:{JSON.stringify(request.isLoading)}</p>
      <p>error:{JSON.stringify(request.error?.message)}</p>
      <p>requestCount:{requestCount}</p>
      // TODO: 不能传递数组，setParams改为run
      <button onClick={() => request.run([1, 2, 3])}>number++</button>
    </div>
  );
};
