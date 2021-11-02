/**
 * title: 并发请求
 * desc: |
 *  解决并发数据问题。
 *  > 例如在请求分页数据时，第一页的数据较多请求时间长，第二页数据较少请求时间短。先请求第一页数据，再请求第二页。由于第二页的数据会先返回数据，而第一页的数据后返回，导致此时在第二页却显示第一页的数据。
 */
import React, { useState } from 'react';
import { useQuery } from 'wwhooks';

export default () => {
  const [requestCount, setRequestCount] = useState(0);
  const request = useQuery({
    url: 'https://getman.cn/mock/test2',
    concurrent: false,
    onSuccess: (data) => {
      setRequestCount((state) => ++state);
    },
    onError: (err) => {
      setRequestCount((state) => ++state);
    },
  });
  return (
    <div>
      <p>data:{JSON.stringify(request.data)}</p>
      <p>loading:{JSON.stringify(request.loading)}</p>
      <p>error:{JSON.stringify(request.error?.message)}</p>
      <p>requestCount:{requestCount}</p>
      <button
        onClick={() => {
          for (var i = 0; i < 5; i++) {
            request.run();
          }
        }}
      >
        request
      </button>
    </div>
  );
};
