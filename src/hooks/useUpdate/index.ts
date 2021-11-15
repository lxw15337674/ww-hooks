import { useCallback, useState } from 'react';
const useUpdate = (props) => {
  const [, setState] = useState({});
  return useCallback(() => {
    setState({});
  }, []);
};
export default useUpdate;
