import React from 'react';
import PropTypes from 'prop-types';

const ProfileAbout = ({ profile: { bio, skills } }) => {
  return <div>{bio}</div>;
};

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileAbout;
