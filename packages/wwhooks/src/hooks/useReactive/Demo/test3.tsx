/**
 * title: 计算属性
 * description: 但计算属性会在每次渲染时重新计算，因此不要在计算属性中执行与渲染无关的逻辑
 */

import { Button } from 'antd';
import React from 'react';
import { useReactive } from 'wwhooks';
import useUpdate from '../../useUpdate';

const Index: React.FC<any> = () => {
  const state = useReactive<any>({
    bugs: ['小杜杜', 'react', 'hook'],
    addBug(bug: string) {
      this.bugs.push(bug);
    },
    get bugsCount() {
      return this.bugs.length;
    },
  });
  const update = useUpdate();
  return (
    <div style={{ padding: 20 }}>
      <Button onClick={() => update()}>force update</Button>
      <div style={{ fontWeight: 'bold', marginTop: 8 }}>计算属性：</div>
      <div style={{ marginTop: 8 }}>数量：{state.bugsCount} 个</div>
      <div style={{ margin: '8px 0' }}>
        <Button
          style={{ marginLeft: 8 }}
          onClick={() => {
            state.addBug(Math.random());
          }}
        >
          增加
        </Button>
        <Button
          color="primary"
          style={{ marginLeft: 8 }}
          onClick={() => state.bugs.pop()}
        >
          删除
        </Button>
      </div>
      <ul>
        {state.bugs.map((bug: any, index: number) => (
          <li key={index}>{bug}</li>
        ))}
      </ul>
    </div>
  );
};

export default Index;
