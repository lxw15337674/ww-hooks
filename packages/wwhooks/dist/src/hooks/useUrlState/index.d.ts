import { SetStateAction } from '../../common/interface';
export declare const useUrlState: (
  defaultValue?: string | string[][] | Record<string, string> | URLSearchParams,
  navigateMode?: 'push' | 'replace',
) => readonly [
  URLSearchParams,
  {
    set: (key: string, entry: SetStateAction<string>) => void;
    clear: () => void;
  },
];
export default useUrlState;
