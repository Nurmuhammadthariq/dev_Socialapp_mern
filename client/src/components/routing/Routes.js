import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../dashboard/Dashboard';
import ProfileForm from '../profileForms/ProfileForm';
import Register from '../auth/Register';
import Login from '../auth/Login';
import AlertCard from '../layout/AlertCard';
import PrivateRoute from './PrivateRoute';

import { Col, Row } from 'react-bootstrap';

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
        <PrivateRoute exact path="/createProfile" component={ProfileForm} />
        <PrivateRoute exact path="/editProfile" component={ProfileForm} />
      </Switch>
    </section>
  );
};

export default Routes;
