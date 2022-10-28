import { getTargetElement } from '../../common/dom';
import { BasicTarget } from '../../common/interface';
import { useState } from 'react';
import useMutationObserver from '../useMutationObserver';

export interface ScrollState {
  x: boolean;
  y: boolean;
}
export const useElementIsScroll = (target: BasicTarget<Element>) => {
  const [state, setState] = useState<ScrollState>({
    x: false,
    y: false,
  });
  useMutationObserver(target, () => {
    const el = getTargetElement<Element>(target);
    if (!el) {
      return;
    }

    setState({
      x: el.scrollWidth !== el.clientWidth,
      y: el.scrollHeight !== el.clientHeight,
    });
  });
  return state;
};
export default useElementIsScroll;
