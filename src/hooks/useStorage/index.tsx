/* eslint-disable max-params */
import { initialState } from '../../common/interface';
import { setStateAction } from '../../common/utils';
import { SetStateAction, useState } from 'react';
import usePersistFn from '../usePersistFn';

export interface Options<T> {
  serializer?: (value: T) => string;
  deserializer?: (value: string) => T;
}

function useStorage<T>(
  key: string,
  defaultValue?: initialState<T>,
  options?: Options<T>,
  storage: Storage = sessionStorage,
) {
  const serializer = (value: T) => {
    if (options?.serializer) {
      return options?.serializer(value);
    }
    return JSON.stringify(value);
  };

  const deserializer = (value: string) => {
    if (options?.deserializer) {
      return options?.deserializer(value);
    }
    return JSON.parse(value);
  };
  const getStorageValue = usePersistFn(() => {
    try {
      const rawValue = storage.getItem(key);
      if (rawValue !== null) {
        return deserializer(rawValue);
      }
    } catch (e) {
      console.error(e);
    }
    return defaultValue;
  });

  const [state, setState] = useState<T>(() => getStorageValue());

  const setStorageState = usePersistFn((nextState?: SetStateAction<T>) => {
    try {
      const nextValue = setStateAction(nextState, state);
      setState(nextValue);
      if (nextValue === undefined) {
        storage.removeItem(key);
      } else {
        storage.setItem(key, serializer(nextValue));
      }
    } catch (e) {
      console.error(e);
    }
  });

  return [state, setStorageState] as const;
}

function useLocalStorage<T>(
  key: string,
  defaultValue?: initialState<T>,
  options?: Options<T>,
) {
  return useStorage(key, defaultValue, options, localStorage);
}

function useSessionStorage<T>(
  key: string,
  defaultValue?: initialState<T>,
  options?: Options<T>,
) {
  return useStorage(key, defaultValue, options);
}

export { useLocalStorage, useSessionStorage };
