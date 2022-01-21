import { BasicTarget, TargetElement } from './interface';
export declare function isFunction(obj: any): obj is Function;
export declare function getTargetElement<T = TargetElement>(
  target?: BasicTarget<T>,
  defaultElement?: T,
): T | undefined | null;
export declare function isInViewPort(el: HTMLElement): boolean;
