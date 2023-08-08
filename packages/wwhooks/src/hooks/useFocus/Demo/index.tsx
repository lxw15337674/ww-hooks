import React, { useRef } from 'react';
import { useFocus } from 'wwhooks';

const MyInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const isFocused = useFocus(ref);
  return (
    <div>
      <label htmlFor="my-input">Type something:</label>
      <input id="my-input" ref={ref} />
      <p>{isFocused ? 'Focused' : 'Not focused'}</p>
    </div>
  );
};

export default MyInput;
