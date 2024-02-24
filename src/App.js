import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";
import CakeContainer from "./componenets/CakeContainer";
import HooksCakeContainer from "./componenets/HooksCakeContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <HooksCakeContainer />
      </div>
    </Provider>
  );
}

export default App;
