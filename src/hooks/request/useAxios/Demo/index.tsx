import React from 'react';
import useAxios from '..';
// import { useAxios } from 'wwhooks';

export default () => {
  const request = useAxios(
    {
      onSuccess: (data) => {
        console.log(data);
      },
      initialData: 'initialData',
    },
    { url: 'https://getman.cn/mock/test2' },
  );
  // 拦截器使用
  request.interceptors.request.use((config) => {
    console.log(config);
    config.cancelToken;
    return config;
  });
  request.interceptors.response.use((response) => {
    console.log(response);
    return response;
  });
  //   失败的请求
  const errorRequest = useAxios(
    {
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
        <p>loading:{JSON.stringify(request.isLoading)}</p>
        <p>error:{JSON.stringify(request.error)}</p>
        <button
          onClick={() => {
            request.run();
          }}
        >
          正常的请求
        </button>

        <button
          onClick={() => {
            request.run();
            request.cancel();
          }}
        >
          取消请求
        </button>
      </div>
      <div>
        <p>data:{JSON.stringify(errorRequest.data)}</p>
        <p>loading:{JSON.stringify(errorRequest.isLoading)}</p>
        <p>error:{JSON.stringify(errorRequest?.error?.message)}</p>
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
