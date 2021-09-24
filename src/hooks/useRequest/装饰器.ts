import { SetPartialStateAction, SetStateAction } from '@/common/interface';
import { setState } from '@/common/utils';
import { mockRequest } from './useAxios/Demo/mockRequest';

import { Params } from './useAxios/interface';
import { AxiosRequestConfig } from 'axios';
import useAxios from './useAxios';

// const request = (config?: AxiosRequestConfig) => {
//   const params = { ...config, ...setState(config, defaultConfig) };
//   return {
//     register: (config: Params) => request({ ...params, ...config }),
//     create: (
//       hookConfig?: SetPartialStateAction<Params>,
//       axiosRequestConfig?: AxiosRequestConfig,
//     ) =>
//       useAxios(
//         { ...config, ...setState(config, hookConfig) },
//         axiosRequestConfig,
//       ),
//   };
// };

// class request {
//   private config:AxiosRequestConfig
//   constructor(config?: AxiosRequestConfig) {

//     return this;
//   }
//   mergeConfig:(config?: AxiosRequestConfig)=>{
//      config=
//   }
//   register: (config: Params) => request({ ...params, ...config }),
// }
