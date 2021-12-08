import useToggle from '../useToggle';

export interface SetBoolean {
  (value?: boolean): void;
}
// 管理 boolean 值
export default function useBoolean(defaultValue = false) {
  const state = useToggle(defaultValue, !defaultValue);
  return state;
}
