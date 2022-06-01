/**
 * title: 恢复title
 * desc: 支持卸载时恢复原本title
 */

import React, { useState } from 'react';
import { useTitle } from 'wwhooks';

const Component = () => {
  const [title, setTitle] = useTitle('Page Title', true);

  return (
    <div>
      <p> {title}</p>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
    </div>
  );
};

export default () => {
  const [state, toggle] = useState(true);

  return (
    <>
      <button type="button" onClick={() => toggle((v) => !v)}>
        {state ? 'unmount' : 'mount'}
      </button>
      {state && <Component />}
    </>
  );
};
