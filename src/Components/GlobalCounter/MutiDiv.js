import React, { useContext } from "react";
import { CountState } from "./GlobalState";

const MutiDiv = () => {
  const { divideCount, multiplyCount } = useContext(CountState);
  return (
    <div>
      <button onClick={multiplyCount}>*</button>
      <button onClick={divideCount}>/</button>
    </div>
  );
};

export default MutiDiv;
