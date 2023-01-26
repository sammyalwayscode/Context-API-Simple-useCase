import React from "react";
import { useContext } from "react";
import { useState } from "react";
import Add from "./Add";
import { CountState } from "./NewGlobal";

const Count = () => {
  const { state } = useContext(CountState);
  return (
    <div>
      <h1>New Count State</h1>
      <h3> {state} </h3>
      <Add />
    </div>
  );
};

export default Count;
