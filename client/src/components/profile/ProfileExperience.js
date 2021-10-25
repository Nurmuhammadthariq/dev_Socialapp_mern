import React from 'react';
import PropTypes from 'prop-types';
import formatDate from '../../utils/formatDate';

const ProfileExperience = ({
  experience: { company, title, location, current, to, from, description },
}) => {
  return (
    <div>
      <h5 className="text-color-g mt-3">{company}</h5>
      <p className="lead">
        {formatDate(from)} - {to ? formatDate(to) : 'Now'}, {title} @{location}
      </p>
      <p className="lead-small">{description}</p>
    </div>
  );
};

ProfileExperience.propTypes = {
  experience: PropTypes.object.isRequired,
};

export default ProfileExperience;
