import { createContext, useState } from "react";

export const CountState = createContext();

export const GlobalState = ({ children }) => {
  const [countNum, setCountNum] = useState(2);

  const addCount = () => {
    setCountNum(countNum + 2);
  };

  const subCount = () => {
    setCountNum(countNum - 1);
  };

  const divideCount = () => {
    setCountNum(countNum / 2);
  };

  const multiplyCount = () => {
    const rnd = Math.random();
    setCountNum(countNum * rnd);
  };
  return (
    <CountState.Provider
      value={{ countNum, addCount, subCount, divideCount, multiplyCount }}
    >
      {children}
    </CountState.Provider>
  );
};
