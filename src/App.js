import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";
import CakeContainer from "./components/CakeContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import BrownieContainer from "./components/BrownieContainer";
import HooksBrownieContainer from "./components/HooksBrownieContainer";
import NewCakeContainer from "./components/NewCakeContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <NewCakeContainer />
        <CakeContainer />
        <HooksCakeContainer />
        <IceCreamContainer />
        <BrownieContainer />
        <HooksBrownieContainer />
      </div>
    </Provider>
  );
}

export default App;
