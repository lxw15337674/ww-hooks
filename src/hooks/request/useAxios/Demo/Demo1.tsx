import React, { useState } from 'react';
import { ResponseFn } from '../interface';
import { useAxios } from 'wwhooks';

export default () => {
  const requestFn = (config) => {
    config.params = {
      test: '123',
    };
    return config;
  };
  const responseFn: ResponseFn = (d, e) => {
    console.log(d, e);
    return [d, e];
  };
  //   正常的请求
  const request = useAxios(
    { url: 'https://getman.cn/mock/test2' },
    {
      request: [requestFn],
      response: [responseFn],
    },
  );

  //   失败的请求
  const request2 = useAxios(
    { url: 'https://getman.cn' },
    {
      response: [responseFn],
    },
  );
  const [data, setData] = useState(null);

  return (
    <p>
      <p>{JSON.stringify(data?.data)}</p>
      <button
        onClick={() => {
          request().then((res) => {
            setData(res);
          });
        }}
      >
        正常的请求
      </button>
      <button
        onClick={() => {
          request2().then((res) => {
            setData(res);
          });
        }}
      >
        失败的请求
      </button>
    </p>
  );
};
