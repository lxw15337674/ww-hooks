export interface SetBoolean {
  (value?: boolean): void;
}
export default function useBoolean(
  defaultValue?: boolean,
): readonly [boolean, (value?: boolean) => void];
