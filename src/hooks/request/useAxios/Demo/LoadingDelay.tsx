import React from 'react';
import useAxios from '..';
// import { useAxios } from 'wwhooks';

export default () => {
  const request = useAxios(
    {
      onSuccess: (data) => {
        console.log(data);
      },
      loadingDelay: 2000,
    },
    { url: 'https://getman.cn/mock/test2' },
  );
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: '50%' }}>
        <p>data:{JSON.stringify(request.data)}</p>
        <p>loading:{JSON.stringify(request.loading)}</p>
        <button
          onClick={() => {
            request.run();
          }}
        >
          正常的请求 {request.loading}
        </button>
      </div>
    </div>
  );
};
