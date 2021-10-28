import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getGithubRepos } from '../../actions/profileAction';
import { Col } from 'react-bootstrap';

const ProfileGithub = ({ username, getGithubRepos, repos }) => {
  useEffect(() => {
    getGithubRepos(username);
  }, [getGithubRepos, username]);

  return (
    <div className="py-3 d-flex justify-content-around flex-wrap">
      {repos === null ? (
        <Spinner />
      ) : (
        repos.map((repo) => (
          <Col md={4} key={repo.id} className="p-1 my-1">
            <div>
              <h6>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {repo.name}
                </a>
              </h6>
            </div>
            <div className="d-flex justify-content-around flex-wrap ml-auto">
              <ul className="badge badge-warning ">
                <li>Stars: {repo.stargazers_count}</li>
              </ul>
              <ul className="badge badge-primary">
                <li>Watchers: {repo.watchers_count}</li>
              </ul>
              <ul className="badge badge-light">
                <li>Forks: {repo.forks_count}</li>
              </ul>
            </div>
          </Col>
        ))
      )}
    </div>
  );
};

ProfileGithub.propTypes = {
  getGithubRepos: PropTypes.func.isRequired,
  repos: PropTypes.array.isRequired,
  username: PropTypes.string.isRequired,
};

const mapStateProps = (state) => ({
  repos: state.profileReducer.repos,
});

export default connect(mapStateProps, { getGithubRepos })(ProfileGithub);
