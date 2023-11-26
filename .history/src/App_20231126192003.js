import { Provider } from "react-redux";
import store from "./store";
import { createBrowserRouter, RouterProvider } from 'react-router'

import Home from "./containers/Home";
import Error404 from "./containers/errors/Error404";
import { Route, Router } from "workbox-routing";

const routeHome = createBrowserRouter({

  path: "/",
  element: <Home/>,

})

const routeError404 = createBrowserRouter({
  
  path: "*",
  element: <Error404/>,

})

function App() {
  return (
    <Provider store = {store}>
      <RouterProvider Router={Router}>
          {/* Error Display*/}
          <RouterProvider Router={routeHome} exact path="/"/>

          <RouterProvider Router={routeError404}/>

        </RouterProvider>
    </Provider>
  );
}

export default App;
