import { useState } from "react";
import { createContext } from "react";

export const CountState = createContext();

export const GlobalState = ({ children }) => {
  const [state, setState] = useState(0);

  const addState = () => {
    setState(state + 1);
  };

  const removeState = () => {
    setState(state - 1);
  };
  return (
    <CountState.Provider value={{ state, addState, removeState }}>
      {children}
    </CountState.Provider>
  );
};
