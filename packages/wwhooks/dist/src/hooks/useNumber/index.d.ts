interface Options {
    min?: number;
    max?: number;
}
export declare type ValueParam = number | ((c: number) => number);
declare const useNumber: (defaultValue?: number, config?: Options) => readonly [any, {
    readonly set: (v: ValueParam) => void;
    readonly reset: () => void;
    readonly plus: (v?: any) => void;
    readonly minus: (v?: any) => void;
}];
export default useNumber;
