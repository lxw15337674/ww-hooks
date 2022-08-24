import React from 'react';
import { useAxios } from 'wwhooks';

export default () => {
  const request = useAxios({
    url: 'https://getman.cn/mock/test2',
    onSuccess: (data) => {
      console.log(data);
    },
    loadingDelay: 2000,
  });
  return (
    <div>
      <p>data:{JSON.stringify(request.data)}</p>
      <p>loading:{JSON.stringify(request.isLoading)}</p>
      <button
        onClick={() => {
          request.reload();
        }}
      >
        正常的请求 {request.isLoading}
      </button>
    </div>
  );
};
