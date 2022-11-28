import { set } from 'lodash';
import { useState } from 'react';
import useEventListener from '../useEventListener';

export interface MousePositionState {
  screenX: number;
  screenY: number;
  clientX: number;
  clientY: number;
  pageX: number;
  pageY: number;
}

const useMouse = () => {
  const [state, setState] = useState<MousePositionState>({
    screenX: NaN,
    screenY: NaN,
    clientX: NaN,
    clientY: NaN,
    pageX: NaN,
    pageY: NaN,
  });
  useEventListener(document, 'mousemove', (event: MouseEvent) => {
    const { screenX, screenY, clientX, clientY, pageX, pageY } = event;
    setState({
      screenX,
      screenY,
      clientX,
      clientY,
      pageX,
      pageY,
    });
  });
  return state;
};
export default useMouse;
