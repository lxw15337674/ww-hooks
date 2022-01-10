import { useMutationConfig } from './interface';
import { useMount, useAxios } from '../../../';
import { useCallback, useState } from 'react';
import { AxiosRequestConfig } from 'axios';
import { setState } from '../../../common/utils';

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

  const run = useCallback(
    (params: React.SetStateAction<P>) => {
      params = setState(params, bodyData);
      setBodyData(params);
      return request.run({ data: params });
    },
    [request.run],
  );
  const reload = useCallback(() => {
    return run(bodyData);
  }, [run, bodyData]);

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
