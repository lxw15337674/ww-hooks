import { useMouse } from 'wwhooks';
import React, { useRef } from 'react';

export default () => {
  const ref = useRef(null);
  const [position, event] = useMouse(ref.current);

  return (
    <>
      <div>是否运行:{event.isRunning ? '是' : '否'}</div>
      <div>
        <button ref={ref}>container</button>
        <button onClick={event.isRunning ? event.stop : event.run}>
          {event.isRunning ? '停止' : '开始'}
        </button>
      </div>
      鼠标位置
      {Object.entries(position).map((m) => (
        <div>
          {m[0]}
          <span style={{ margin: '0 5px' }}>:</span>
          {m[1]}
        </div>
      ))}
    </>
  );
};
