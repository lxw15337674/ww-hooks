export interface Options {
  min?: number;
  max?: number;
}
export declare type ValueParam = number | ((c: number) => number);
export declare const useNumber: (
  defaultValue?: number,
  config?: Options,
) => readonly [
  number,
  {
    readonly set: (v: ValueParam) => void;
    readonly reset: () => void;
    readonly plus: (v?: any) => void;
    readonly minus: (v?: any) => void;
  },
];
export default useNumber;
