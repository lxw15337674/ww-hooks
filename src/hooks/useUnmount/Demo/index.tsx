import React from 'react';
import { useBoolean, useUnmount } from 'wwhooks';
import { message } from 'antd';

const Component = () => {
  useUnmount(() => {
    message.success('unMount');
  });
  return <span>Hello World</span>;
};

export default () => {
  const [state, { toggle }] = useBoolean(true);

  return (
    <>
      <button type="button" onClick={toggle}>
        {state ? 'unmount' : 'mount'}
      </button>
      {state && <Component />}
    </>
  );
};
