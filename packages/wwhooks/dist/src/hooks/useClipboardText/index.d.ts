import { SetStateAction } from '../../common/interface';
export interface Options {
    onEnter?: () => void;
    onLeave?: () => void;
}
export default function useClipboardText(): readonly [any, (clipboardText: SetStateAction<string>) => void];
