import React, { useState } from 'react';
import { useObject } from 'wwhooks';

interface Obj {
  name: string;
  age: number;
}
const Demo = () => {
  const [obj, setObj, actions] = useObject<Obj>({
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
            setObj((prev) => ({
              age: ++prev.age,
            }))
          }
        >
          age++
        </button>

        <input
          value={obj.name}
          onChange={(e) => {
            setObj({ name: e.target.value });
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
