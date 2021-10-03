import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import Landing from './components/layout/Landing';
import Routes from './components/routing/Routes';
import './App.css';

const App = () => {
  return (
    <Router>
      <Fragment>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route component={Routes} />
        </Switch>
      </Fragment>
    </Router>
  );
};

export default App;
