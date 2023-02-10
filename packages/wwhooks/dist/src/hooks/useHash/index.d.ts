import { Dispatch, SetStateAction } from 'react';
export declare const useHash: (
  InitialState?: string,
) => [string, Dispatch<SetStateAction<string>>, () => void];
export default useHash;
