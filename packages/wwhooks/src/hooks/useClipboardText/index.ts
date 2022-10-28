import { useState } from 'react';
import useEventListener from '../useEventListener';
import { SetStateAction } from '../../common/interface';
import { setStateAction } from '../../common/utils';
import usePersistFn from '../usePersistFn';
import useMount from '../useMount';

async function readPermission() {
  const state = false;
  try {
    const permission = await navigator.permissions.query({
      name: 'clipboard-read' as any,
    });
    if (permission.state === 'denied') {
      throw new Error('Not allowed to read clipboard.');
    }
    return true;
  } catch (error) {
    console.error(error.message);
  }
  return state;
}

const getClipboardContent = async () => {
  if (await readPermission()) {
    const text = await navigator.clipboard.readText();
    return text;
  }
  return '';
};

export default function useClipboardText() {
  const [text, setText] = useState<string>('');
  const sync = usePersistFn(async () => {
    setText(await getClipboardContent());
  });
  useMount(() => {
    sync();
  });

  useEventListener(document, 'copy', async () => {
    sync();
  });

  useEventListener(document, 'cut', async () => {
    sync();
  });

  const write = usePersistFn((clipboardText: SetStateAction<string>) => {
    readPermission().then(() => {
      navigator.clipboard
        .writeText(setStateAction(clipboardText, text))
        .then(() => {
          setText(clipboardText);
        });
    });
  });
  return [text, write] as const;
}

export { useClipboardText };
