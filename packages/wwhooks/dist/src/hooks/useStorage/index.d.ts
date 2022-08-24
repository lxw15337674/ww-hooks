import { InitialState } from '../../common/interface';
export interface Options<T> {
    serializer?: (value: T) => string;
    deserializer?: (value: string) => T;
}
declare function useLocalStorage<T>(key: string, defaultValue?: InitialState<T>, options?: Options<T>): readonly [any, (nextState?: SetStateAction<T_1>) => void];
declare function useSessionStorage<T>(key: string, defaultValue?: InitialState<T>, options?: Options<T>): readonly [any, (nextState?: SetStateAction<T_1>) => void];
export { useLocalStorage, useSessionStorage };
