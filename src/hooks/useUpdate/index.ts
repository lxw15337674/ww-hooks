import { useState } from 'react';
import usePersistFn from '../usePersistFn';
const useUpdate = () => {
  const [, setState] = useState({});
  return usePersistFn(() => {
    setState({});
  });
};
export default useUpdate;
