import { MutableRefObject } from 'react';

export type SetStateAction<T> = T | ((value: T) => T);

export type InitialState<T> = T | (() => T);

export type SetPartialStateAction<T> = Partial<T> | ((value: T) => Partial<T>);

export type SetDispatch<T> = (state: SetStateAction<T>) => void;

export type SetPartialDispatch<T> = (state: SetPartialStateAction<T>) => void;

export type Fn = (...args: any) => any;

export type BasicTarget<T = Element> =
  | (() => T | null)
  | T
  | null
  | MutableRefObject<T | null | undefined>;

export type Target = BasicTarget<HTMLElement | Element | Window | Document>;

export type TargetElement = Element | Document | Window | EventTarget;

export type EventListenerOptions =
  | boolean
  | {
      once?: boolean;
      passive?: boolean;
      signal?: AbortSignal;
      capture?: boolean;
    };
