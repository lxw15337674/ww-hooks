import React, { useState } from 'react';
import { ResponseFn } from '../interface';
import { useAxios } from 'wwhooks'


export default () => {
    const requestFn = (config) => {
        config.params = {
            test: '123'
        }
        return config
    }
    const responseFn: ResponseFn = (d, e) => {
        console.log(d, e);
        return [d, e]
    }
    const request = useAxios({ url: 'https://getman.cn/mock/test2' }, {
        request: [requestFn],
        response: [responseFn]
    })
    const [data, setData] = useState(null);

    return <p>
        <p>{JSON.stringify(data?.data)}</p>
        <button onClick={() => {
            request().then(res => {
                setData(res)
            })
        }}>测试</button>
    </p>
};