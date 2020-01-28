import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// These files have different variations of the same component in them.  I have it set up this way so I can comment out one or the other to test and compare between the two of them
// import Navbar from "./components/layout/Navbar";
import Navbar from "./components/layout/Nav";

import Landing from "./components/layout/Landing";
import Routes from "./components/routing/Routes";

// Redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";

// CSS Elements
import "./css/App.css";
import "./css/responsive.css";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar /> {/*How to conditionally render it?*/}
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route component={Navbar, Routes} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
