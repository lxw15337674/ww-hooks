import { SetStateAction } from '../../common/interface';
export default function useClipboardText(): readonly [
  string,
  (clipboardText: SetStateAction<string>) => void,
];
export { useClipboardText };
