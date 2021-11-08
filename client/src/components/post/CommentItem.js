import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import formatDate from '../../utils/formatDate';
import { connect } from 'react-redux';
import { Button, Image } from 'react-bootstrap';

const CommentItem = ({
  postId,
  comment: { _id, text, name, avatar, user, date },
  auth,
}) => {
  return (
    <div className="post bg-dark p-3 mt-5">
      <div>
        <Link
          to={`/profile/${user}`}
          className="d-flex flex-wrap align-items-end"
        >
          <Image
            className="text-center card-image mr-3"
            variant="top"
            src={avatar}
            roundedCircle
            height="50px"
            width="50px"
          />

          <h4>{name}</h4>
        </Link>
        <p className="pt-3 lead">{text}</p>
      </div>
      <div className="pr-2 pb-2 d-flex align-items-end flex-column">
        <p className="lead-small text-color-g">posted on {formatDate(date)}</p>
        {!auth.loading && user === auth.user._id && (
          <Button size="sm" type="button" variant="danger">
            <i className="fas fa-times" />
          </Button>
        )}
      </div>
    </div>
  );
};

CommentItem.propTypes = {
  postId: PropTypes.string.isRequired,
  comment: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateProps = (state) => ({
  auth: state.authReducer,
});

export default connect(mapStateProps)(CommentItem);
