/**
 *
 * title.zh-CN: 监听 keydown 事件
 */

import React, { useState } from 'react';
import { useEventListener } from 'wwhooks';

export default () => {
  const [value, setValue] = useState('');

  const keyDownHandler = (ev: KeyboardEvent) => {
    setValue(ev.code);
  };
  useEventListener('keydown', keyDownHandler);

  return <p>Your press key is {value}</p>;
};
