import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../dashboard/Dashboard';
import Register from '../auth/Register';
import Login from '../auth/Login';
import ProfileForm from '../profileForms/ProfileForm';
import AddExperience from '../profileForms/AddExperience';
import AddEducation from '../profileForms/AddEducation';
import Profiles from '../profiles/Profiles';
import Profile from '../profile/Profile';
import Posts from '../posts/Posts';
import AlertCard from '../layout/AlertCard';
import PrivateRoute from './PrivateRoute';

import { Col } from 'react-bootstrap';

const Routes = () => {
  return (
    <section className="container">
      <Col className="text-center d-flex justify-content-around">
        <AlertCard />
      </Col>

      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/profiles" component={Profiles} />
        <Route exact path="/profile/:id" component={Profile} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/createProfile" component={ProfileForm} />
        <PrivateRoute exact path="/editProfile" component={ProfileForm} />
        <PrivateRoute exact path="/addExperience" component={AddExperience} />
        <PrivateRoute exact path="/addEducation" component={AddEducation} />
        <PrivateRoute exact path="/posts" component={Posts} />
      </Switch>
    </section>
  );
};

export default Routes;
