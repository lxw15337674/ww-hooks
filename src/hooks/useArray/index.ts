import { isEqual, setState } from '../../common/utils';
import { useState, useMemo, useCallback } from 'react';
import { initialState } from '@/common/interface';

const useArray = <T = any>(initialArray: initialState<T[]>) => {
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
    }),
    [initialArray],
  );

  const swap = useCallback(
    (dragIndex: number, dropIndex: number) => {
      const maxIndex = value.length - 1;
      if (dragIndex > maxIndex || dropIndex > maxIndex) {
        console.error('交换位置超出最大位置');
      }
      const list = [...value];
      [list[dragIndex], list[dropIndex]] = [list[dropIndex], list[dragIndex]];
      setValue(list);
    },
    [value],
  );
  const reorder = useCallback(
    (startIndex: number, endIndex: number) => {
      const maxIndex = value.length - 1;
      if (startIndex > maxIndex || endIndex > maxIndex) {
        console.error('交换位置超出最大位置');
      }
      const result = [...value];
      const [removed] = result.splice(startIndex, 1);
      result.splice(endIndex, 0, removed);
      setValue(result);
    },
    [value],
  );
  return [value, { isEdited, swap, reorder, ...actions }] as const;
};

export default useArray;
