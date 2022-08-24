import { BasicTarget, TargetElement } from './interface';
export declare function isFunction(obj: any): obj is Function;
export declare function getTargetElement<T = TargetElement>(target?: BasicTarget<T>, defaultElement?: T): T | undefined | null;
export declare function on<T extends Window | Document | HTMLElement | EventTarget>(obj: T | null, ...args: Parameters<T['addEventListener']> | [string, Function | null, ...any]): void;
export declare function off<T extends Window | Document | HTMLElement | EventTarget>(obj: T | null, ...args: Parameters<T['removeEventListener']> | [string, Function | null, ...any]): void;
export declare function isInViewPort(el: HTMLElement): boolean;
