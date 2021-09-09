export const isFunction = (value: any): value is (...params: any[]) => any => {
  return typeof value === 'function';
};
