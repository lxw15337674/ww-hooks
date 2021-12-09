/**
 * title: Listen keydown
 * desc: Press any key to preview.
 *
 * title.zh-CN: 监听 keydown 事件
 * desc.zh-CN: 按下键盘查看效果。
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
