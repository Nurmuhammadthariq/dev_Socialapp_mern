import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getGithubRepos } from '../../actions/profileAction';
import { Col } from 'react-bootstrap';

const ProfileGithub = ({ username }) => {
  return <div></div>;
};

ProfileGithub.propTypes = {};

export default ProfileGithub;
