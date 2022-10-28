import { useMutationConfig } from './interface';
import { useMount, useAxios, usePersistFn } from '../../..';
import { useState } from 'react';
import { AxiosRequestConfig } from 'axios';
import { setStateAction } from '../../../common/utils';
import { SetStateAction } from 'packages/wwhooks/src/common/interface';

const useMutation = <P = any, D = any>({
  manual = true,
  data,
  ...useAxiosConfig
}: useMutationConfig<P, D>) => {
  const [bodyData, setBodyData] = useState<P>(data);
  const axiosConfig: AxiosRequestConfig = {
    data: bodyData,
    method: 'post',
    ...useAxiosConfig,
  };

  const request = useAxios<P>(axiosConfig);

  const run = usePersistFn((params: SetStateAction<P>) => {
    let _params = setStateAction(params, bodyData);
    setBodyData(params);
    return request.run({ data: _params });
  });
  const reload = usePersistFn(() => {
    return run(bodyData);
  });

  useMount(() => {
    if (manual === false) {
      request.reload();
    }
  });

  return {
    ...request,
    run,
    reload,
    params: bodyData,
    setParams: setBodyData,
  } as const;
};

export default useMutation;
