/// <reference types="react" />
declare const useNumber: (defaultValue?: number) => readonly [
  number,
  {
    readonly plus: (v?: number) => void;
    readonly minus: (v?: number) => void;
    readonly set: import('react').Dispatch<
      import('react').SetStateAction<number>
    >;
    readonly reset: () => void;
  },
];
export default useNumber;
