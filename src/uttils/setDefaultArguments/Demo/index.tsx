import React from 'react';
import setDefaultArguments from '../index'

interface Obj {
    a?: string,
    b?: string
}

interface Fn {
    (a: Obj, b: Obj): void
}

export default () => {
    const fn: Fn = (a, b) => {
        console.log(a, b)
    }
    const wrapperFn = setDefaultArguments<Fn, Parameters<Fn>>(fn, { a: '2' }, { b: '2' })
    return <p>
        <button onClick={() => wrapperFn({ b: '1' }, { a: '1' })}>点击</button>
    </p>;
};