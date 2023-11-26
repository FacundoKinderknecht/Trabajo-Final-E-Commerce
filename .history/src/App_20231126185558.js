import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Home from "./containers/Home";

function App() {
  return (
    <Provider store = {store}>
      <div className="text-blue-600">
        App
      </div>
    </Provider>
  );
}

export default App;
