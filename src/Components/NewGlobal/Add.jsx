import React from "react";
import { useContext } from "react";
import { CountState } from "./NewGlobal";

const Add = () => {
  const { addState, removeState } = useContext(CountState);
  return (
    <div>
      <button onClick={addState}>+</button>
      <button onClick={removeState}>-</button>
    </div>
  );
};

export default Add;
