import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addComment } from '../../actions/postAction';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const CommentForm = ({ postId, addComment }) => {
  const [text, setText] = useState('');

  return (
    <Container>
      <Row>
        <Col md={8} sm={8} xs={8}>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              addComment(postId, { text });
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

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired,
};

export default connect(null, { addComment })(CommentForm);
