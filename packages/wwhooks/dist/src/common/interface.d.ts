import { MutableRefObject } from 'react';
export declare type SetStateAction<T> = T | ((value: T) => T);
export declare type InitialState<T> = T | (() => T);
export declare type SetPartialStateAction<T> =
  | Partial<T>
  | ((value: T) => Partial<T>);
export declare type SetDispatch<T> = (state: SetStateAction<T>) => void;
export declare type SetPartialDispatch<T> = (
  state: SetPartialStateAction<T>,
) => void;
export declare type Fn = (...args: any) => any;
export declare type BasicTarget<T = Element> =
  | (() => T | null)
  | T
  | null
  | MutableRefObject<T | null | undefined>;
export declare type Target = BasicTarget<
  HTMLElement | Element | Window | Document
>;
export declare type TargetElement = Element | Document | Window | EventTarget;
export declare type EventListenerOptions =
  | boolean
  | {
      once?: boolean;
      passive?: boolean;
      signal?: AbortSignal;
      capture?: boolean;
    };
