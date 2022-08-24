export interface Options<T> {
    rowHeight: number | ((index: number) => number);
    colWidth: number | ((index: number) => number);
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
    vertical = "vertical",
    horizontal = "horizontal"
}
