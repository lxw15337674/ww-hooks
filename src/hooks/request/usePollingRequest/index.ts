import useAxios from '../useAxios';
import React, { useCallback, useRef, useState } from 'react';
import { useRequestConfig } from './interface';

const useRequest = <D = any>({
  pollingInterval,
  ...config
}: useRequestConfig<D>) => {
  const stateAxios = useAxios(config);

  // const run = useCallback(() => {}, [stateAxios.run]);

  const timer = useRef<NodeJS.Timeout>();

  const run = () => {
    if (pollingInterval) {
      timer.current = setTimeout(() => {
        stateAxios.run().then(() => run());
      }, pollingInterval);
    }
  };
};

export default useRequest;
