import { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  const addCount = () => {
    setCount(count + 2);
  };

  const subCount = () => {
    setCount(count - 1);
  };

  const divideCount = () => {
    setCount(count / 2);
  };

  const multiplyCount = () => {
    const rnd = Math.random();
    setCount(count * rnd);
  };
  return (
    <div className="counter">
      <h1> {count} </h1>
      <div className="butCtrl">
        <button onClick={addCount}>+</button>
        <button onClick={subCount}>-</button>
        <button onClick={divideCount}>/</button>
        <button onClick={multiplyCount}>*</button>
      </div>
    </div>
  );
};

export default Counter;
