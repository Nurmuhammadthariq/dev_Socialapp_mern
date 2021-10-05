import React, { Fragment, useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alertAction';
import PropTypes from 'prop-types';

const Register = ({ setAlert }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const { name, email, password, passwordConfirm } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      setAlert('Password do not match', 'danger');
    } else {
      console.log(formData);
    }
  };

  return (
    <Fragment>
      <Row className="justify-content-md-center">
        <Col lg={12} sm={12}>
          <h3 className="texts-primary">Sign Up</h3>
          <p className="lead-1 text-center">
            <i className="fas fa-user mr-2 " /> Create Your Account
          </p>
        </Col>
        <Col lg={5}>
          <Form className="form" onSubmit={(e) => onSubmit(e)}>
            <Form.Group controlId="text">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                name="name"
                value={name}
                required
                onChange={(e) => onChange(e)}
              />
            </Form.Group>

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
                minLength="8"
                value={password}
                required
                onChange={(e) => onChange(e)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                name="passwordConfirm"
                minLength="8"
                value={passwordConfirm}
                required
                onChange={(e) => onChange(e)}
              />
            </Form.Group>

            <Row>
              <Col md={3}>
                <Button className="submit" size="md" type="submit">
                  Register
                </Button>
              </Col>

              <Col md={9} className="d-flex align-items-center">
                <p className="tag-line my-1">
                  Already have an account?
                  <Link className="text-warning" to="/login">
                    Sign In
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

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
};

export default connect(null, { setAlert })(Register);
