import { setState } from '../../common/utils';
import { isEqual } from 'lodash';
import { useState, useMemo } from 'react';

const useArray = <T = any>(initialArray: T[]) => {
  const [value, setValue] = useState<T[]>(initialArray);

  const isEdited = useMemo(() => {
    return !isEqual(initialArray, value);
  }, [initialArray, value]);
  const actions = useMemo(
    () => ({
      set: (index: number, item: T | ((prev: T) => T)) => {
        setValue((prev) => {
          let temp = [...prev];
          temp[index] = setState<T>(item, temp[index]);
          return temp;
        });
      },
      setAll: setValue,
      remove: (index: number) => {
        setValue((prev) => {
          const temp = [...prev];
          temp.splice(index, 1);
          return temp;
        });
      },
      push: (item: T) => {
        setValue((prev) => {
          const temp = [...prev];
          temp.push(item);
          return temp;
        });
      },
      clear: () => {
        setValue([]);
      },
      reset: () => {
        setValue(initialArray);
      },
      swap: (dragIndex: number, dropIndex: number) => {
        const maxIndex = value.length - 1;
        if (dragIndex > maxIndex || dropIndex > maxIndex) {
          console.error('交换位置超出最大位置');
          return;
        }
        setValue((prev) => {
          const list = [...prev];
          [list[dragIndex], list[dropIndex]] = [
            list[dropIndex],
            list[dragIndex],
          ];
          return list;
        });
      },
    }),
    [initialArray],
  );
  return [value, { isEdited, ...actions }] as const;
};

export default useArray;
