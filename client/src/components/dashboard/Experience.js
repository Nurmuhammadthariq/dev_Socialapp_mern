import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import formatDate from '../../utils/formatDate';
import { Table, Row, Col } from 'react-bootstrap';

const Experience = ({ experience }) => {
  const experiences = experience.map((exp) => (
    <tr key={exp._id}>
      <td>{exp.company}</td>
      <td>{exp.title}</td>
      <td>
        {formatDate(exp.from)} - {exp.to ? formatDate(exp.to) : 'Now'}
      </td>
      <td>
        <button className="btn btn-danger">Delete</button>
      </td>
    </tr>
  ));

  return (
    <Fragment>
      <Row>
        <Col lg={12} md={6} sm={3}>
          <h4>Experience Credentials</h4>
          <Table className="table" responsive>
            <thead>
              <tr>
                <th>Company</th>
                <th>Title</th>
                <th>Years</th>
                <th />
              </tr>
            </thead>
            <tbody>{experiences}</tbody>
          </Table>
        </Col>
      </Row>
    </Fragment>
  );
};

Experience.propTypes = {
  experience: PropTypes.array.isRequired,
};

export default connect(null)(Experience);
