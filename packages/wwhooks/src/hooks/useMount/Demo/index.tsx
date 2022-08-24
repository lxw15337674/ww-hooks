import React from 'react';
import { useBoolean, useMount } from 'wwhooks';
import { message } from 'antd';

const Component = () => {
  useMount(() => {
    message.success('mount');
  });
  return <span>Hello World</span>;
};

export default () => {
  const [state, toggle] = useBoolean(false);

  return (
    <>
      <button type="button" onClick={() => toggle()}>
        {state ? 'unmount' : 'mount'}
      </button>
      {state && <Component />}
    </>
  );
};
