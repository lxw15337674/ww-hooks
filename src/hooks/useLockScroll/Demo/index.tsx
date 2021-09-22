import React, { useRef } from 'react';
import { useLockScroll } from 'wwhooks';

export default () => {
    const domRef = useRef<any>()
    const [lock, toggle] = useLockScroll(domRef.current)
    return <>
        <button onClick={toggle}>lock</button>

        <div style={{ height: 400, overflow: 'auto', border: `1px solid black` }} ref={domRef}>
            <div style={{ height: 1000 }}>
            </div>
        </div>
    </>

};