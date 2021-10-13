import { useState, useCallback, useMemo } from 'react';
import { AxiosResponse } from 'axios';
import _ from 'lodash';
import { Config } from './interface';

// // 数据请求Hook
// export default function useRequest<D = any>(
//   config?: Config<D>,
//   ...useAxiosConfig: Parameters<typeof useAxios>
// ) {}
