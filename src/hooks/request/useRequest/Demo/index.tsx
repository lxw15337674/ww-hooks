import React, { useState } from 'react';
import { useRequest } from 'wwhooks';

export default () => {
  const request = useRequest(
    {
      manual: true,
      onSuccess: (data) => {
        console.log(data);
      },
    },
    { url: 'https://getman.cn/mock/test2' },
  );
  //   失败的请求
  const errorRequest = useRequest(
    {
      manual: true,
      onError: (error) => {
        console.log(error);
      },
    },
    { url: 'https://getman.cn' },
  );
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: '50%' }}>
        <p>data:{JSON.stringify(request.data)}</p>
        <p>loading:{JSON.stringify(request.loading)}</p>
        <p>error:{JSON.stringify(request.error)}</p>

        <button
          onClick={() => {
            request.run();
          }}
        >
          正常的请求
        </button>
      </div>
      <div>
        <p>data:{JSON.stringify(errorRequest.data)}</p>
        <p>loading:{JSON.stringify(errorRequest.loading)}</p>
        <p>error:{JSON.stringify(errorRequest.error)}</p>
        <button
          onClick={() => {
            errorRequest.run().then((res) => {
              console.log(res);
            });
          }}
        >
          失败的请求
        </button>
      </div>
    </div>
  );
};
