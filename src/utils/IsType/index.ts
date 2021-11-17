import _ from 'lodash';

function isType<T>(data: any, type: string): data is T {
  const dataType = Object.prototype.toString
    .call(data)
    .slice(8, -1)
    .toLowerCase();
  return type === dataType;
}

export default isType;
