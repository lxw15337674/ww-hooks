import { isEqual, setStateAction } from '../../common/utils';
import { useState, useMemo } from 'react';
import usePersistFn from '../usePersistFn';
import { InitialState } from '../../common/interface';

export const useArray = <T = any>(initialArray: InitialState<T[]>) => {
  const [value, setValue] = useState<T[]>(initialArray);

  const isEdited = useMemo(() => {
    return !isEqual(initialArray, value);
  }, [initialArray, value]);
  const set = usePersistFn((index: number, item: T) => {
    setValue((prev) => {
      let temp = [...prev];
      temp[index] = item;
      return temp;
    });
  });
  const remove = usePersistFn((index: number) => {
    setValue((prev) => {
      const temp = [...prev];
      temp.splice(index, 1);
      return temp;
    });
  });
  const push = usePersistFn((item: T) => {
    setValue((prev) => {
      const temp = [...prev];
      temp.push(item);
      return temp;
    });
  });
  const clear = usePersistFn(() => [setValue([])]);
  const reset = usePersistFn(() => {
    setValue(initialArray);
  });
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
      set,
      remove,
      push,
      clear,
      reset,
      setAll: setValue,
    },
  ] as const;
};

export default useArray;
