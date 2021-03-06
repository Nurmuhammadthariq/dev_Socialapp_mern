import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import DashboardActions from './DashboardActions';
import Experience from './Experience';
import Education from './Education';

//Redux
import { connect } from 'react-redux';
import { getCurrentProfile, deleteAccount } from '../../actions/profileAction';

const Dashboard = ({
  getCurrentProfile,
  deleteAccount,
  auth: { user },
  profile: { profile, loading },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return (
    <Fragment>
      <h3>Dashboard</h3>
      <p className="lead">
        <i className="fa fa-user"></i> Welcome!{' '}
        <span className="text-color-g"> {user && user.name} </span>
      </p>
      {profile !== null ? (
        <Fragment>
          <DashboardActions />
          <Experience experience={profile.experience} />
          <Education education={profile.education} />

          <div className="my-5">
            <Button onClick={() => deleteAccount()} variant="danger">
              Delete your account
            </Button>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <p>You have not yet setup a profile, please add some info</p>
          <Link to="/createProfile" className="btn btn-primary my-1">
            Create your profile
          </Link>
        </Fragment>
      )}
    </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateProps = (state) => ({
  auth: state.authReducer,
  profile: state.profileReducer,
});

export default connect(mapStateProps, { getCurrentProfile, deleteAccount })(
  Dashboard
);
