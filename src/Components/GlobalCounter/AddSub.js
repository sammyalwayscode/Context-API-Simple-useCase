import { useContext } from "react";
import { CountState } from "./GlobalState";

const AddSub = () => {
  const { addCount, subCount } = useContext(CountState);
  return (
    <div>
      <button onClick={addCount}>+</button>
      <button onClick={subCount}>-</button>
    </div>
  );
};

export default AddSub;
