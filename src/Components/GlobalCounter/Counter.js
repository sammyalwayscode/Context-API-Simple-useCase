import React, { useContext } from "react";
import AddSub from "./AddSub";
import MutiDiv from "./MutiDiv";
import "../Counter/Counter.css";
import { CountState } from "./GlobalState";

const Counter = () => {
  const { countNum } = useContext(CountState);
  return (
    <div className="counter">
      <AddSub />
      <h1> {countNum} </h1>
      <MutiDiv />
    </div>
  );
};

export default Counter;
