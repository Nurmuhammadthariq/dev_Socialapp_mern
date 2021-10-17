import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import formatDate from '../../utils/formatDate';
import { Table, Row, Col } from 'react-bootstrap';

const Education = ({ education }) => {
  const educations = education.map((edu) => (
    <tr key={edu._id}>
      <td>{edu.school}</td>
      <td>{edu.degree}</td>
      <td>
        {formatDate(edu.from)} - {edu.to ? formatDate(edu.to) : 'Present'}
      </td>
      <td>
        <button className="btn btn-danger">Remove</button>
      </td>
    </tr>
  ));

  return (
    <Fragment>
      <Row>
        <Col lg={12} md={6} sm={3}>
          <h4>Education Credentials</h4>
          <Table className="table" responsive>
            <thead>
              <tr>
                <th>Institute</th>
                <th>Degree</th>
                <th>Years</th>
                <th />
              </tr>
            </thead>
            <tbody>{educations}</tbody>
          </Table>
        </Col>
      </Row>
    </Fragment>
  );
};

Education.propTypes = {
  education: PropTypes.array.isRequired,
};

export default connect(null)(Education);
