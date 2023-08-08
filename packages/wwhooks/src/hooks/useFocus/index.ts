import { useEventListener } from '../../';
import { useState } from 'react';
import { BasicTarget } from '../../common/interface';

export const useFocus = (container: BasicTarget) => {
  const [isFocused, setIsFocused] = useState(false);

  useEventListener(container, 'focus', () => setIsFocused(true));
  useEventListener(container, 'blur', () => setIsFocused(false));

  return isFocused;
};

export default useFocus;
