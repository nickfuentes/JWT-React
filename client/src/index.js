import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import BaseLayout from "./components/BaseLayout";
import Login from "./components/Login";
import MyBooks from "./components/MyBooks";
import { setAuthenticationHeader } from "./utils/authenticate";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./store/reducer";
import requireAuth from "./components/requireAuth";
import Register from "./components/Register";

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// get the token
let token = localStorage.getItem("jsonwebtoken");
// and attach it to the header
setAuthenticationHeader(token);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <BaseLayout>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/my-books" component={requireAuth(MyBooks)} />
        </Switch>
      </BaseLayout>
    </Provider>
  </BrowserRouter>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
