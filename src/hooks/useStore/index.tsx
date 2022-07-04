import React, {
  Children,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

interface Props<T> {
  initialState: T;
}
interface ContextProps {
  children: React.ReactNode;
}

function initContext<T>({ initialState }: Props<T>) {
  const Context = createContext(null);
  return {
    Provider: ({ children }: ContextProps) => {
      const [state, setState] = useState(initialState);
      return (
        <Context.Provider value={{ state, setState }}>
          {children}
        </Context.Provider>
      );
    },
    useStore: () => {
      return useContext(Context);
    },
  };
}
export default initContext;
