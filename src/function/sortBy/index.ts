import _ from 'lodash';

const colspan = (lengthList: number[]): number[] => {
  return lengthList.reduce<number[]>((prev, cur) => {
    let list: number[] = new Array(cur).fill(0);
    list[0] = cur;
    prev.push(...list);
    return prev;
  }, []);
};

function sortBy<T extends {}>(data: T[], keys: (keyof T)[]) {
  let list = _.sortBy(data, keys);
  type Span = {
    [index in keyof T]?: number[];
  };
  let span: Span = {};
  for (let key of keys) {
    let currentValue = list[0][key];
    const lengthList = list.reduce(
      (pre: number[], cur) => {
        if (cur[key] === currentValue) {
          const lastLength = pre.length - 1;
          pre[lastLength] = pre[lastLength] + 1;
        } else {
          pre.push(1);
          currentValue = cur[key];
        }
        return pre;
      },
      [0],
    );
    span[key] = colspan(lengthList);
  }
  return [list, span] as const;
}

export default sortBy;
