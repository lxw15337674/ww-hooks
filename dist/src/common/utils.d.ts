import { SetStateAction } from './interface';
export declare const isValue: <T>(state: SetStateAction<T>) => state is T;
export declare const setState: <T>(v: SetStateAction<T>, prev: T) => T;
export declare function numToPx(number: number): string;
export declare function pxToNum(str: string): number;
export declare function mergeWith(obj: any, source: any, customizer: any): any;
