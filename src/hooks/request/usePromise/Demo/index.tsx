/**
 *
 * title: 基本用法
 * desc: |
 *  基本用法
 *
 */
import React from 'react';
import { usePromise } from 'wwhooks';
import { getData, getErrorData } from './api';

export default () => {
  const request = usePromise(getData, {
    onSuccess: (data) => {
      console.log(data);
    },
    initialData: 'initialData',
  });

  //   失败的请求
  const errorRequest = usePromise(getErrorData, {
    onError: (error) => {
      console.log(error);
    },
  });

  return (
    <div>
      <p>data:{JSON.stringify(request.data)}</p>
      <p>status:{JSON.stringify(request.status)}</p>
      <p>error:{JSON.stringify(request.error)}</p>
      <button
        onClick={() => {
          request.run();
        }}
      >
        正常的请求
      </button>
      <p>data:{JSON.stringify(errorRequest.data)}</p>
      <p>status:{JSON.stringify(errorRequest.status)}</p>
      <p>error:{JSON.stringify(errorRequest?.error?.message)}</p>
      <button
        onClick={() => {
          errorRequest.run().then(
            (res) => {
              console.log(res);
            },
            (err) => {
              console.log(err);
            },
          );
        }}
      >
        失败的请求
      </button>
    </div>
  );
};
