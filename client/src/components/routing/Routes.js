import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../dashboard/Dashboard';
import Register from '../auth/Register';
import Login from '../auth/Login';
import AlertCard from '../layout/AlertCard';

import { Col, Row } from 'react-bootstrap';
import PrivateRoute from './PrivateRoute';

const Routes = () => {
  return (
    <section className="container">
      <Row className="justify-content-md-center">
        <Col lg={5}>
          <AlertCard />
        </Col>
      </Row>
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
      </Switch>
    </section>
  );
};

export default Routes;
