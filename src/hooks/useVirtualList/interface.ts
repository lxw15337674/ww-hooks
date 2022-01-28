import { MutableRefObject } from 'react';

export interface Options {
  height: number | ((index: number) => number);
  containerRef: MutableRefObject<HTMLDivElement>;
  wrapperRef: MutableRefObject<HTMLDivElement>;
  overscan?: number;
}
export interface Pool<T> {
  item: T;
  id: number;
  used: boolean;
}
export interface Distance {
  top: number;
  left: number;
}

export interface Index {
  start: number;
  end: number;
}

export interface UpdateOffset {
  upOffset: number;
  downOffset: number;
}

export enum Direction {
  vertical = 'vertical',
  horizontal = 'horizontal',
}
