/**
 * title: 基础用法
 * description: 设置页面标题, 支持多个useTitle同时使用,title会保持同步
 */

import React from 'react';
import { useTitle } from 'wwhooks';

export default () => {
  const [title, setTitle] = useTitle('Page Title');

  return (
    <div>
      <p>{title}</p>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
    </div>
  );
};
