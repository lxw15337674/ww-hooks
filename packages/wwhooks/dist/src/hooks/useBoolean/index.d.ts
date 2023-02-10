export interface SetBoolean {
  (value?: boolean): void;
}
export declare function useBoolean(
  defaultValue?: boolean,
): readonly [boolean, (value?: boolean | undefined) => void];
export default useBoolean;
