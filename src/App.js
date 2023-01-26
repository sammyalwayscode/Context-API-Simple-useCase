import Counter from "./Components/GlobalCounter/Counter";
import { GlobalState } from "./Components/GlobalCounter/GlobalState";
import Count from "./Components/NewGlobal/Count";

const App = () => {
  return (
    <GlobalState>
      <div>
        <center>
          <Count />
        </center>
      </div>
    </GlobalState>
  );
};

export default App;
