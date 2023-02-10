import { InitialState } from '../../common/interface';
import { SetStateAction } from 'react';
export interface useStorageOptions<T> {
  serializer?: (value: T) => string;
  deserializer?: (value: string) => T;
}
declare function useLocalStorage<T>(
  key: string,
  defaultValue?: InitialState<T>,
  options?: useStorageOptions<T>,
): readonly [T, (nextState: SetStateAction<T>) => void];
declare function useSessionStorage<T>(
  key: string,
  defaultValue?: InitialState<T>,
  options?: useStorageOptions<T>,
): readonly [T, (nextState: SetStateAction<T>) => void];
export { useLocalStorage, useSessionStorage };
declare const _default: {
  useLocalStorage: typeof useLocalStorage;
  useSessionStorage: typeof useSessionStorage;
};
export default _default;
