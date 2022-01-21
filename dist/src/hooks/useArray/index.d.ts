/// <reference types="react" />
import { initialState } from '@/common/interface';
declare const useArray: <T = any>(
  initialArray: initialState<T[]>,
) => readonly [
  T[],
  {
    readonly set: (index: number, item: T | ((prev: T) => T)) => void;
    readonly setAll: import('react').Dispatch<
      import('react').SetStateAction<T[]>
    >;
    readonly remove: (index: number) => void;
    readonly push: (item: T) => void;
    readonly clear: () => void;
    readonly reset: () => void;
    readonly isEdited: boolean;
    readonly swap: (dragIndex: number, dropIndex: number) => void;
    readonly reorder: (startIndex: number, endIndex: number) => void;
  },
];
export default useArray;
