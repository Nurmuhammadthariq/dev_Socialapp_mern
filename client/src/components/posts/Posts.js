import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPosts } from '../../actions/postAction';

const Posts = ({ getPosts }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return <div></div>;
};

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  posts: PropTypes.object.isRequired,
};

const mapStateProps = (state) => ({
  posts: state.postReducer,
});

export default connect(mapStateProps, { getPosts })(Posts);
