import useToggle from '../useToggle';

export interface SetBoolean {
  (value?: boolean): void;
}
// 管理 boolean 值
export function useBoolean(defaultValue = false) {
  const state = useToggle(defaultValue, !defaultValue);
  return state;
}

export default useBoolean;
