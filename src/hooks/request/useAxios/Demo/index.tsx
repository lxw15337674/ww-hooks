import React from 'react';
import { useAxios } from 'wwhooks';

export default () => {
  const request = useAxios({
    url: 'https://getman.cn/mock/test2',
    data: [1, 2, 3],
    params: { params: 1 },
    method: 'post',
    onSuccess: (data) => {
      console.log(data);
    },
    initialData: 'initialData',
  });
  //   失败的请求
  const errorRequest = useAxios({
    url: 'https://getman.cn',
    onError: (error) => {
      console.log(error);
    },
  });

  return (
    <div>
      <p>data:{JSON.stringify(request.data)}</p>
      <p>loading:{JSON.stringify(request.isLoading)}</p>
      <p>error:{JSON.stringify(request.error)}</p>
      <button
        onClick={() => {
          request.reload();
        }}
      >
        正常的请求
      </button>

      <button
        onClick={() => {
          request.reload();
          request.cancel();
        }}
      >
        取消请求
      </button>

      <p>data:{JSON.stringify(errorRequest.data)}</p>
      <p>loading:{JSON.stringify(errorRequest.isLoading)}</p>
      <p>error:{JSON.stringify(errorRequest?.error?.message)}</p>
      <button
        onClick={() => {
          errorRequest.reload().then((res) => {
            console.log(res);
          });
        }}
      >
        失败的请求
      </button>
    </div>
  );
};
