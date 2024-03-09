import { useState, useMemo, useCallback } from "react";
import usePersistFn from "../usePersistFn";

// 返回半选状态、全选状态、切换多选、半选、单选的方法
export function useSelections<T extends object = object>(
  data: T[],
  defaultSelected: T[] = [],
  key: string='id',
) {
  const [selected, setSelected] = useState<T[]>(defaultSelected);

  const partiallySelected = useMemo(() => {
    return selected.length > 0 && selected.length < data.length;
  }, [selected, data]);

  const allSelected = useMemo(() => {
    return selected.length === data.length && data.length > 0;
  }, [selected, data]);

  const noneSelected = useMemo(() => {
    return selected.length === 0 && data.length > 0;
  }, [selected]);


  const selectedKeys = useMemo(() => {
    return selected.map((item) => item[key]);
  }, [selected, key]);

  // 选择
  const select = usePersistFn((item: T, checked: boolean) => {
    setSelected((prevSelectedList) => {
      const index = prevSelectedList.findIndex((i) => i[key] === item[key]);
      if (index > -1) {
        if (!checked) {
          prevSelectedList.splice(index, 1);
        }
      } else {
        prevSelectedList.push(item);
      }
      return [...prevSelectedList];
    });
  });

  const selectByKey = usePersistFn((itemKey: string, toggle = false) => {
    const item = data.find((i) => i[key] === itemKey);
    if (item) {
      select(item, toggle);
    }
  });

  const selectGroupByKey = usePersistFn((keys: string[]) => {
    const newSelectedList = data.filter((item) => keys.includes(item[key]));
    setSelected(newSelectedList);
  });

  const selectAll = usePersistFn((isSelected?: boolean) => {
    if (isSelected === undefined) {
      isSelected = !allSelected;
    }
    if (isSelected) {
      setSelected([...data]);
    } else {
      setSelected([]);
    }
  });


  const isSelected = usePersistFn((item: T) => {
    return selected.findIndex((i) => i[key] === item[key]) > -1;
  });


  return {
    selected,
    allSelected,
    noneSelected,
    partiallySelected,
    select,
    isSelected,
    setSelected,
    selectGroupByKey,
    selectByKey,
    selectedKeys,
    selectAll
  };
}

export default useSelections;