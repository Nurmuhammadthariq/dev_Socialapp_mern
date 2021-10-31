import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import formatDate from '../../utils/formatDate';
import { connect } from 'react-redux';
import { addLike, removeLike } from '../../actions/postAction';
import { Button, Image } from 'react-bootstrap';

const PostItem = ({
  addLike,
  removeLike,
  auth,
  post: { _id, text, name, avatar, user, likes, comments, date },
  showActions,
}) => {
  return (
    <div className="bg-dark p-1 my-3">
      <div className="p-4">
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

        {showActions && (
          <div>
            <Button onClick={() => addLike(_id)} className="btn-light mr-2">
              <i className="fas fa-thumbs-up" />{' '}
              <span>{likes.length > 0 && <span>{likes.length}</span>}</span>
            </Button>
            <Button onClick={() => removeLike(_id)} className="btn-light mr-2">
              <i className="fas fa-thumbs-down" />
            </Button>
            <Link to={`/posts/${_id}`} className="btn btn-primary mr-2">
              Discussion{' '}
              {comments.length > 0 && (
                <span className="comment-count">{comments.length}</span>
              )}
            </Link>
            {!auth.loading && user === auth.user._id && (
              <Button className="btn-danger">
                <i className="fas fa-times" />
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

PostItem.defaultProps = {
  showActions: true,
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.authReducer,
});

export default connect(mapStateToProps, { addLike, removeLike })(PostItem);
