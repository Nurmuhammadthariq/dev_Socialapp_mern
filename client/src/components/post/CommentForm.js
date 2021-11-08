import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const CommentForm = (props) => {
  const [text, setText] = useState('');

  return (
    <Container>
      <Row>
        <Col md={8} sm={8} xs={8}>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              //   addPost({ text });
              setText('');
            }}
          >
            <Form.Group>
              <Form.Control
                as="textarea"
                rows="3"
                placeholder="Comment the post"
                name="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                style={{ width: '150%' }}
                required
              />
            </Form.Group>
            <Form.Group>
              <Button className="btn btn-dark" type="submit" value="Submit">
                Comment
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

CommentForm.propTypes = {};

export default connect(null)(CommentForm);
