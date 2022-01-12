import { isObject } from '@/common/utils';

type Fn = (...args: any[]) => any;

function setDefaultArguments<
  F extends Fn = Fn,
  P extends any[] = Parameters<F>,
>(fn: F, ...defaultArguments: Parameters<F>): (...args: P) => ReturnType<F> {
  return (...args: P) => {
    const mergeArgs = defaultArguments.map((v, i) => {
      if (Array.isArray(v)) {
        return args[i];
      }
      if (isObject(v)) {
        return { ...v, ...args[i] };
      }
      return args[i];
    });
    return fn(...mergeArgs);
  };
}

export default setDefaultArguments;
