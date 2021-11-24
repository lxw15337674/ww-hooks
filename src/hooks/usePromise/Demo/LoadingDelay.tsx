import React from 'react';
import { usePromise } from 'wwhooks';
import { getData } from './api';

export default () => {
  const request = usePromise(getData, {
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
          request.run();
        }}
      >
        正常的请求 {request.isLoading}
      </button>
    </div>
  );
};
