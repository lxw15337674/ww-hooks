import { SetStateAction } from '../../common/interface';
declare const _default: (
  defaultValue?: string | string[][] | Record<string, string> | URLSearchParams,
  navigateMode?: 'push' | 'replace',
) => readonly [
  URLSearchParams,
  {
    set: (key: string, entry: SetStateAction<string>) => void;
    clear: () => void;
  },
];
export default _default;
