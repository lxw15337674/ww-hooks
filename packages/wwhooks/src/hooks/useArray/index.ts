import { isEqual, setStateAction } from '../../common/utils';
import { useState, useMemo } from 'react';
import { InitialState } from 'packages/wwhooks/src/common/interface';
import usePersistFn from '../usePersistFn';

export const useArray = <T = any>(initialArray: InitialState<T[]>) => {
  const [value, setValue] = useState<T[]>(initialArray);

  const isEdited = useMemo(() => {
    return !isEqual(initialArray, value);
  }, [initialArray, value]);
  const actions = useMemo(
    () => ({
      set: (index: number, item: T | ((prev: T) => T)) => {
        setValue((prev) => {
          let temp = [...prev];
          temp[index] = setStateAction<T>(item, temp[index]);
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

  const swap = usePersistFn((dragIndex: number, dropIndex: number) => {
    const maxIndex = value.length - 1;
    if (dragIndex > maxIndex || dropIndex > maxIndex) {
      console.error('交换位置超出最大位置');
    }
    const list = [...value];
    [list[dragIndex], list[dropIndex]] = [list[dropIndex], list[dragIndex]];
    setValue(list);
  });
  const reorder = usePersistFn((startIndex: number, endIndex: number) => {
    const maxIndex = value.length - 1;
    if (startIndex > maxIndex || endIndex > maxIndex) {
      console.error('交换位置超出最大位置');
    }
    const result = [...value];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    setValue(result);
    return result;
  });
  return [
    value,
    {
      isEdited,
      swap,
      reorder,
      ...actions,
      setAll: setValue,
    },
  ] as const;
};

export default useArray;
