import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addEducation } from '../../actions/profileAction';
import { Form, Col, Container, Button } from 'react-bootstrap';

const AddEducation = ({ addEducation, history }) => {
  const [formData, setFormData] = useState({
    school: '',
    degree: '',
    fieldofstudy: '',
    from: '',
    to: '',
    current: false,
    description: '',
  });

  const { school, degree, fieldofstudy, from, to, current, description } =
    formData;

  const onChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Container className="mt-1">
      <h3>Add Your Education</h3>
      <p className="lead-1">
        <i className="fas fa-code-branch"></i>Add any school or bootcamp that
        you have attended
      </p>
      <Form
        className="form text-start d-flex flex-wrap"
        onSubmit={(e) => {
          e.preventDefault();
          addEducation(formData, history);
        }}
      >
        <Form.Group as={Col} md="6" controlId="schoolName">
          <Form.Label>School Or Institute Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="* Your School"
            name="school"
            value={school}
            onChange={onChange}
          />
        </Form.Group>

        <Form.Group as={Col} md="3" controlId="certificate">
          <Form.Label>Certificate Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="* Your Degree or Certificate"
            name="degree"
            value={degree}
            onChange={onChange}
          />
        </Form.Group>

        <Form.Group as={Col} md="3" controlId="fieldofstudy">
          <Form.Label>Field Of Study</Form.Label>
          <Form.Control
            type="text"
            placeholder="field of study"
            name="fieldofstudy"
            value={fieldofstudy}
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
          <Form.Label>Current School</Form.Label>
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
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            name="description"
            rows={4}
            value={description}
            onChange={onChange}
            placeholder="Write Your Program Description"
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

AddEducation.propTypes = {
  addEducation: PropTypes.func.isRequired,
};

export default connect(null, { addEducation })(AddEducation);
