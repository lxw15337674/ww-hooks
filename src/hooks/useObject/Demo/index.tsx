import React, { useState } from 'react';
import { Fragment } from 'react-dom/node_modules/@types/react';
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
      <p>
        {(Object.keys(obj) as Array<keyof Obj>).map((key) => {
          return (
            <span key={key}>
              {key} : {obj[key]}
            </span>
          );
        })}
      </p>
      <p>isEdited : {actions.isEdited.toString()}</p>
      <p>
        <button
          onClick={() =>
            actions.set((prev) => {
              age: ++prev.age;
            })
          }
        >
          age++
        </button>

        <input
          value={obj.name}
          onChange={(e) => {
            actions.set({ name: e.target.value });
          }}
        />
      </p>
      <p>
        <button onClick={actions.reset}>reset</button>
      </p>
    </div>
  );
};
export default Demo;
