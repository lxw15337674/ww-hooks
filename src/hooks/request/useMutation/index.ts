import { useMutationConfig } from './interface';
import _ from 'lodash';
import { useMount, useAxios } from '../../../';
import { useCallback, useState, useMemo } from 'react';
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

  const request = useAxios<D>(axiosConfig);

  const run = useCallback(
    (params?: React.SetStateAction<P>) => {
      if (params !== undefined) {
        params = setState(params, bodyData);
        setBodyData(params);
        return request.run({ data: params });
      }
      return request.run();
    },
    [request.run],
  );

  useMount(() => {
    if (manual === false) {
      run();
    }
  });

  return { ...request, run, params: bodyData } as const;
};

export default useMutation;
