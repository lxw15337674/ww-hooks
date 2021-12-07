import { isFunction } from 'lodash';
import { MutableRefObject } from 'react';

export type BasicTarget<T = HTMLElement> =
  | (() => T | null)
  | T
  | null
  | MutableRefObject<T | null | undefined>;

type TargetElement = HTMLElement | Element | Document | Window;

export function getTargetElement<T = TargetElement>(
  target?: BasicTarget<T>,
  defaultElement?: T,
): T | undefined | null {
  if (!target) {
    return defaultElement;
  }

  let targetElement: T | undefined | null;

  if (isFunction(target)) {
    targetElement = target();
  } else if ('current' in target) {
    targetElement = target.current;
  } else {
    targetElement = target;
  }

  return targetElement;
}
