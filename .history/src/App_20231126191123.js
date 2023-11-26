import { Provider } from "react-redux";
import store from "./store";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from "./containers/Home";
import Error404 from "./containers/errors/Error404";
import { Route, Router } from "workbox-routing";

function App() {
  return (
    <Provider store = {store}>
      <RouterProvider Router={Router}>
        <RouterProvider Routes={Routes}>
          {/* Error Display*/}
          <RouterProvider Router={Route} path="*" element={<Error404/>}/>

          <RouterProvider Router={Route} exact path="/" element={<Home/>}/>

        </RouterProvider>
      </RouterProvider>
    </Provider>
  );
}

export default App;
