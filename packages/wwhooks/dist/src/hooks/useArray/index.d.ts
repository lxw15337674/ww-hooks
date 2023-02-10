/// <reference types="react" />
import { InitialState } from 'packages/wwhooks/src/common/interface';
export declare const useArray: <T = any>(
  initialArray: InitialState<T[]>,
) => readonly [
  T[],
  {
    readonly setAll: import('react').Dispatch<
      import('react').SetStateAction<T[]>
    >;
    readonly set: (index: number, item: T | ((prev: T) => T)) => void;
    readonly remove: (index: number) => void;
    readonly push: (item: T) => void;
    readonly clear: () => void;
    readonly reset: () => void;
    readonly isEdited: boolean;
    readonly swap: (dragIndex: number, dropIndex: number) => void;
    readonly reorder: (startIndex: number, endIndex: number) => T[];
  },
];
export default useArray;
