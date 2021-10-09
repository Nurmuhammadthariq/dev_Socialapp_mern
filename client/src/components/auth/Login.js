import React, { Fragment, useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/authAction';

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    login(email, password);
  };

  // Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Fragment>
      <Row className="justify-content-md-center login-form">
        <Col lg={12} sm={12}>
          <h3 className="texts-primary">Sign In</h3>
          <p className="lead-1 text-center">
            <i className="fas fa-user mr-2 " /> Sign Into Your Account
          </p>
        </Col>
        <Col lg={5}>
          <Form className="form" onSubmit={(e) => onSubmit(e)}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Your Email"
                name="email"
                value={email}
                required
                onChange={(e) => onChange(e)}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                required
                onChange={(e) => onChange(e)}
              />
            </Form.Group>

            <Row>
              <Col lg={3}>
                <Button className="submit" size="md" type="submit">
                  Login
                </Button>
              </Col>

              <Col lg={10} className="d-flex align-items-center">
                <p className="tag-line my-1">
                  Create new a new account
                  <Link className="text-warning" to="/register">
                    Sign Up
                  </Link>
                </p>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Fragment>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateProps = (state) => ({
  isAuthenticated: state.authReducer.isAuthenticated,
});

export default connect(mapStateProps, { login })(Login);
