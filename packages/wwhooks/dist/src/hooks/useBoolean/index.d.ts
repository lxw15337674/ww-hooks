export interface SetBoolean {
    (value?: boolean): void;
}
export default function useBoolean(defaultValue?: boolean): readonly [any, (value?: boolean) => void];
