import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Table, Row, Col } from 'react-bootstrap';

const Experience = ({ experience }) => {
  const experiences = experience.map((exp) => (
    <tr key={exp._id}>
      <td>{exp.company}</td>
      <td>{exp.title}</td>
      <td>
        {exp.from} - {exp.to ? exp.to : 'Now'}
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
                <td>Company</td>
                <td>Title</td>
                <td>Years</td>
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

export default Experience;
