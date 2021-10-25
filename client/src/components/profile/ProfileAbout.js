import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const ProfileAbout = ({
  profile: {
    bio,
    skills,
    user: { name },
  },
}) => {
  return (
    <div className="p-4 mt-3 transparent-bg">
      {bio && (
        <Fragment>
          <h5 className="text-light text-center">
            {name.trim().split(' ')[0]}'s Bio
          </h5>
          <p className="lead-small text-center">{bio}</p>
        </Fragment>
      )}
      <h6 className="text-center">Skill set</h6>
      <div className="lead-small text-center d-flex justify-content-center flex-wrap">
        {skills.map((skill, index) => (
          <div key={index} className="p-2 mx-2">
            <i className="fa fa-free-code-camp" /> {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileAbout;
