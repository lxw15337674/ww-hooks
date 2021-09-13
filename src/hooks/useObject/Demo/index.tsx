import React, { useState } from 'react';
import { useObject } from 'wwhooks';
interface Obj {
  name: string;
  age: number;
}
// todo:
// 1. 可以重置单个属性
// 2. 可以设置单个属性
const Demo = () => {
  const [obj, actions] = useObject<Obj>({
    name: 'bhwa233',
    age: 25,
  });
  const [state, setState] = useState<Obj>({
    name: 'bhwa233',
    age: 25,
  });
  return (
    <div>
      {(Object.keys(obj) as Array<keyof Obj>).map((key) => {
        return (
          <p key={key}>
            {key} : {obj[key]}
          </p>
        );
      })}
      <p>isEdited : {actions.isEdited.toString()}</p>
      <p>
        <button onClick={() => actions.reset()}>reset</button>
        <input
          value={obj.name}
          onChange={(e) => {
            actions.set({ name: e.target.value });
          }}
        />
      </p>
    </div>
  );
};
export default Demo;
