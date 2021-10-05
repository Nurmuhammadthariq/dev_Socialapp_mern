import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import Landing from './components/layout/Landing';
import Routes from './components/routing/Routes';
import './App.css';
// Redux
import { Provider } from 'react-redux'
import store from './store'


const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route component={Routes} />
          </Switch>
        </Fragment>
    </Router>
    </Provider>
  );
};

export default App;
