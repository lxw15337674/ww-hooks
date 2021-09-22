export type SetStateAction<T> = T | ((value: T) => T);

export type SetDispatch<T> = (state: SetStateAction<T>) => void;

export type Fn = (...args: any) => any;
