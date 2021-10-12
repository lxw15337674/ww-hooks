import useAxios from '../useAxios';
import { AxiosRequestConfig } from 'axios';

export function useQuery(axiosConfig?: AxiosRequestConfig) {
  //   return setDefaultArguments(useAxios, axiosConfig, {
  //     request: [
  //       (config) => {
  //         config.method = 'post';
  //         return config;
  //       },
  //     ],
  //   });
  return useAxios(axiosConfig, {
    request: [
      (config) => {
        config.method = 'post';
        return config;
      },
    ],
  });
}

export default useQuery;
