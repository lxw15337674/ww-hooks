import React, { useState } from 'react';
import { useQuery } from 'wwhooks'


export default () => {
    const request = useQuery({ url: 'https://getman.cn/mock/test2' })
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