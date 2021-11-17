import _ from 'lodash';

type Fn = (...args: any[]) => any;

function customizer(objValue, srcValue) {
  if (_.isArray(objValue)) {
    return objValue.concat(srcValue);
  }
}

function setDefaultArguments<
  F extends Fn = Fn,
  P extends any[] = Parameters<F>,
>(fn: F, ...defaultArguments: Parameters<F>): (...args: P) => ReturnType<F> {
  return (...args: P) => {
    const mergeArgs = defaultArguments.map((v, i) => {
      if (_.isArray(v)) {
        return [...v, ...args[i]];
      }
      if (_.isObject(v)) {
        const source = { ...v };
        return _.mergeWith(source, args[i], customizer);
      }
      return args[i];
    });
    return fn(...mergeArgs);
  };
}

export default setDefaultArguments;
