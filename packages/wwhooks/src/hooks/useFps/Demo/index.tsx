import React, { useRef } from 'react';
import { useFps } from 'wwhooks';

const MyInput = () => {
  const fps = useFps()
  return (
    <div>
      <p>fps:{fps }</p>
    </div>
  );
};

export default MyInput;
