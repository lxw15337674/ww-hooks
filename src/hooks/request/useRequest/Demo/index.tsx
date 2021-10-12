import React, { useState } from 'react';
import { useRequest } from 'wwhooks';

export default () => {
  const request = useRequest(
    {
      manual: false,
      onSuccess: (data) => {
        console.log(data);
      },
    },
    { url: 'https://getman.cn/mock/test2' },
  );
  return (
    <p>
      <p>data:{JSON.stringify(request.data)}</p>
      <p>loading:{JSON.stringify(request.loading)}</p>
      <p>error:{JSON.stringify(request.error)}</p>
      <button
        onClick={() => {
          request.run();
        }}
      >
        测试
      </button>
    </p>
  );
};
