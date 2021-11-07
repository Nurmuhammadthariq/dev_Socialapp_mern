import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../../actions/postAction';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const PostForm = ({ addPost }) => {
  const [text, setText] = useState('');

  return (
    <Container>
      <Row>
        <Col md={8} sm={8} xs={8}>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              addPost({ text });
              setText('');
            }}
          >
            <Form.Group>
              <Form.Control
                as="textarea"
                rows="5"
                placeholder="Create Your Post"
                name="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                style={{ width: '150%' }}
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

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
};

export default connect(null, { addPost })(PostForm);
