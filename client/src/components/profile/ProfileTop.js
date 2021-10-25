import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-bootstrap';

const ProfileTop = ({
  profile: {
    status,
    company,
    location,
    website,
    social,
    user: { name, avatar },
  },
}) => {
  return (
    <div className="text-center p-4 transparent-bg">
      <Image
        className="text-center card-image"
        variant="top"
        src={avatar}
        roundedCircle
        height="150px"
        width="150px"
      />
      <h3 className="pt-2">{name}</h3>
      <p className="lead">
        {status} {company ? <span> at {company}, </span> : null}
        {location ? <span className="text-color-g">{location}</span> : null}
      </p>

      <div className="d-flex justify-content-center my-1">
        {website ? (
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-1 globe"
          >
            <i className="fas fa-globe" />
          </a>
        ) : null}
        {social
          ? Object.entries(social)
              .filter(([_, value]) => value)
              .map(([key, value]) => (
                <a
                  key={key}
                  href={value}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mx-2 ${key}`}
                >
                  <i className={`fab fa-${key}`}></i>
                </a>
              ))
          : null}
      </div>
    </div>
  );
};

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileTop;
