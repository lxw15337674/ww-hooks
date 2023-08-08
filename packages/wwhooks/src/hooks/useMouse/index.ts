import { useState } from 'react';
import useEventListener from '../useEventListener';

export interface CursorState {
  screenX: number;
  screenY: number;
  clientX: number;
  clientY: number;
  pageX: number;
  pageY: number;
  elementX: number;
  elementY: number;
  elementH: number;
  elementW: number;
  elementPosX: number;
  elementPosY: number;
}

const initState: CursorState = {
  screenX: NaN,
  screenY: NaN,
  clientX: NaN,
  clientY: NaN,
  pageX: NaN,
  pageY: NaN,
  elementX: NaN,
  elementY: NaN,
  elementH: NaN,
  elementW: NaN,
  elementPosX: NaN,
  elementPosY: NaN,
};

export const useMouse = (target?: HTMLElement | null) => {
  const [state, setState] = useState(initState);

  const event = useEventListener(document, 'mousemove', (event: MouseEvent) => {
    const {
      screenX,
      screenY,
      clientX,
      clientY,
      pageX,
      pageY,
      offsetX,
      offsetY,
    } = event;
    const newState = {
      screenX,
      screenY,
      clientX,
      clientY,
      pageX,
      pageY,
      offsetX,
      offsetY,
      elementX: NaN,
      elementY: NaN,
      elementH: NaN,
      elementW: NaN,
      elementPosX: NaN,
      elementPosY: NaN,
    };
    const targetElement = target;
    if (targetElement) {
      const { left, top, width, height } =
        targetElement.getBoundingClientRect();
      newState.elementPosX = left + window.pageXOffset;
      newState.elementPosY = top + window.pageYOffset;
      newState.elementX = pageX - newState.elementPosX;
      newState.elementY = pageY - newState.elementPosY;
      newState.elementW = width;
      newState.elementH = height;
    }
    setState(newState);
  });

  return [state, event] as const;
};

export default useMouse;
