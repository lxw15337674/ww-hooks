function colSpan<T extends {}>(data: T[], keys: (keyof T)[]) {
  let list = data;
  type Span = {
    [key in keyof T]?: number[];
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
    const colSpan = (lengthList: number[]): number[] => {
      return lengthList.reduce<number[]>((prev, cur) => {
        let list: number[] = new Array(cur).fill(0);
        list[0] = cur;
        prev.push(...list);
        return prev;
      }, []);
    };
    span[key] = colSpan(lengthList);
  }
  return span;
}

export { colSpan };
