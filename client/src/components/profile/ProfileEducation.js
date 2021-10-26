import React from 'react';
import PropTypes from 'prop-types';
import formatDate from '../../utils/formatDate';

const ProfileEducation = ({
  education: { school, degree, fieldofStudy, to, from, description },
}) => {
  return (
    <div>
      <h5 className="text-color-g">{school}</h5>
      <p className="lead">
        {formatDate(from)} - {to ? formatDate(to) : 'Now'}, {degree}{' '}
        {fieldofStudy}
      </p>
      <p className="lead-small">{description}</p>
    </div>
  );
};

ProfileEducation.propTypes = {
  education: PropTypes.object.isRequired,
};

export default ProfileEducation;
