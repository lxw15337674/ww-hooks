/**
 *
 * title: 基本用法
 * description: |
 * 简单示例
 *
 */
import React, { useState } from 'react';
import { useClipboardText } from 'wwhooks';

export default () => {
  const [text, setText] = useClipboardText();
  const [state, setState] = useState('');
  return (
    <div>
      <p>Clipboard : {text}</p>
      <textarea onChange={(e) => setState(e.target.value)} />
      <p>
        <button onClick={() => setText(state)}>copy to Clipboard</button>
      </p>
    </div>
  );
};
