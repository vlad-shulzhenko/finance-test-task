import React,
{
  createContext,
  useContext,
  useEffect,
  useState
} from 'react';
import { ResponseExample } from './types/ResponseExample';
import { socket } from './api/socket';

interface TickersContextState {
  response: ResponseExample[],
  setResponse: (value: ResponseExample[]) => void,
  unselected: string[],
  setUnselected: (value: string[]) => void,
};

export const TickersContext = createContext<TickersContextState>({} as TickersContextState);

const useTickersContext = () => useContext(TickersContext);

const TickersContextProvider: React.FC = ({ children }) => {
  const [response, setResponse] = useState<ResponseExample[]>([]);
  const [unselected, setUnselected] = useState<string[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      socket.emit("start");
      socket.on("ticker", (data: ResponseExample[]) => {
        setResponse(data);
      });
    }, 2000)
    return () => clearInterval(interval);
  }, [response]);

  return (
    <TickersContext.Provider value={{response, setResponse, unselected, setUnselected}}>
      {children}
    </TickersContext.Provider>
  );
};

export {TickersContextProvider, useTickersContext};
