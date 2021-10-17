import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addExperience } from '../../actions/profileAction';
import { Form, Col, Container, Button } from 'react-bootstrap';

const AddExperience = ({ addExperience, history }) => {
  const [formData, setFormData] = useState({
    company: '',
    title: '',
    location: '',
    from: '',
    to: '',
    current: false,
    description: '',
  });

  const { company, title, location, from, to, current, description } = formData;

  const onChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Container className="mt-1">
      <h3>Add an experience</h3>
      <p className="lead-1">
        <i className="fas fa-code-branch"></i> Add any developer/programming
        positions that you have had in the past
      </p>
      <Form
        className="form text-start d-flex flex-wrap"
        onSubmit={(e) => {
          e.preventDefault();
          window.location.reload(false);
          addExperience(formData, history);
        }}
      >
        <Form.Group as={Col} md="3" controlId="jobTitle">
          <Form.Label>Job Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Job Title"
            name="title"
            value={title}
            onChange={onChange}
          />
        </Form.Group>

        <Form.Group as={Col} md="6" controlId="companyName">
          <Form.Label>Company Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your company"
            name="company"
            value={company}
            onChange={onChange}
          />
        </Form.Group>

        <Form.Group as={Col} md="3" controlId="location">
          <Form.Label>Location</Form.Label>
          <Form.Control
            type="text"
            placeholder="Location"
            name="location"
            value={location}
            onChange={onChange}
          />
        </Form.Group>

        <Form.Group as={Col} md="3" controlId="dateFrom">
          <Form.Label>From</Form.Label>
          <Form.Control
            type="date"
            name="from"
            value={from}
            onChange={onChange}
          />
        </Form.Group>

        <Form.Group controlId="checkbox">
          <Form.Label>Current Job</Form.Label>
          <Form.Control
            type="checkbox"
            name="current"
            checked={current}
            value={current}
            onChange={() => {
              setFormData({ ...formData, current: !current });
            }}
          />
        </Form.Group>

        <Form.Group as={Col} md="3" controlId="dateTo">
          <Form.Label>To</Form.Label>
          <Form.Control
            type="date"
            name="to"
            value={to}
            onChange={onChange}
            disabled={current}
          />
        </Form.Group>

        <Form.Group as={Col} md="12">
          <Form.Label>Jobs Description</Form.Label>
          <Form.Control
            as="textarea"
            name="description"
            rows={4}
            value={description}
            onChange={onChange}
            placeholder="Write Your Description"
          />
        </Form.Group>

        <Form.Group className="text-center" as={Col} md="12">
          <Button className="btn-signup" type="submit">
            ADD
          </Button>
          <Link className="btn btn-login my-1" to="/dashboard">
            CANCEL
          </Link>
        </Form.Group>
      </Form>
    </Container>
  );
};

AddExperience.propTypes = {
  addExperience: PropTypes.func.isRequired,
};

export default connect(null, { addExperience })(AddExperience);
