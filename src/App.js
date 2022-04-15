import Counter from "./Components/GlobalCounter/Counter";
import { GlobalState } from "./Components/GlobalCounter/GlobalState";

const App = () => {
  return (
    <GlobalState>
      <div>
        <Counter />
      </div>
    </GlobalState>
  );
};

export default App;
