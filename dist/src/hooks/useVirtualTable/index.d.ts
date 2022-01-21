import { Options } from './interface';
declare const _default: <T = any>(
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
export default _default;
