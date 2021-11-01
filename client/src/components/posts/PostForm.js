import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const PostForm = (props) => {
  return (
    <Container>
      <Row className="justify-content-md">
        <Col md={8} className="">
          <Form>
            <Form.Group>
              <Form.Control
                as="textarea"
                rows={5}
                placeholder="Create Your Post"
                name="text"
                style={{ width: '50rem' }}
                // value={text}
                // onChange={(e) => setText(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group>
              <Button className="btn btn-dark" type="submit" value="Submit">
                POST <i className="fa fa-plus-circle" aria-hidden="true" />
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

PostForm.propTypes = {};

export default PostForm;
