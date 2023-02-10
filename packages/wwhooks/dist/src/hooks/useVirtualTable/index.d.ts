import { Options } from './interface';
export declare const useVirtualTable: <T = any>(
  originalList: T[][],
  containerRef: any,
  options: Options<T>,
) => {
  list: T[][];
  wrapperProps: {
    style: {
      width: number;
      height: number;
    };
  };
};
export default useVirtualTable;
