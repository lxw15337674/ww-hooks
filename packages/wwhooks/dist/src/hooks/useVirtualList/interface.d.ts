import { MutableRefObject } from 'react';
export interface Options {
  itemHeight: number;
  containerRef: MutableRefObject<Element>;
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
export declare enum Direction {
  vertical = 'vertical',
  horizontal = 'horizontal',
}
