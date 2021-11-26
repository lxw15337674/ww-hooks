import React from 'react';
import { useArray } from 'wwhooks';

type ActionsButton = [string, () => void];

export default () => {
  const [array, actions] = useArray<string>(['1', '2', '3', '4', '5']);

  const actionButtons: ActionsButton[] = [
    ['set second item add 1', () => actions.set(1, (prev) => `${prev}1`)],
    [`set new Array to ['3','4','5']`, () => actions.setAll(['3', '4', '5'])],
    ['delete second item', () => actions.remove(1)],
    ['reset Array', () => actions.reset()],
    ['clear Array', () => actions.clear()],
    ['push item to Array', () => actions.push('10')],
    ['swap 0 to 2', () => actions.swap(0, 2)],
  ];

  return (
    <>
      <p>state: {JSON.stringify(array)}</p>
      <p>isEdited:{JSON.stringify(actions.isEdited)}</p>
      <p>
        {actionButtons.map(([text, callback], index) => (
          <button type="button" onClick={() => callback()} key={index}>
            {text}
          </button>
        ))}
      </p>
    </>
  );
};
