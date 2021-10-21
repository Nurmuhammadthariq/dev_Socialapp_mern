import React, { Fragment } from 'react';
import { Navbar, NavbarBrand, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/authAction';

const NavBar = ({
  authReducer: { isAuthenticated, loading, user },
  logout,
}) => {
  const authLinks = (
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="nav justify-content-end">
        <Nav.Link href="/profiles">Developers</Nav.Link>
        <Nav.Link>
          <i className="fas fa-images"></i> Posts
        </Nav.Link>
        <Nav.Link as={Link} to="/dashboard">
          <i className="fas fa-user"></i> {user && user.name}
        </Nav.Link>
        <Nav.Link onClick={logout}>
          <i className="fas fa-sign-out-alt"></i> Logout
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  );

  const guestLinks = (
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="nav justify-content-end">
        <Nav.Link href="/profiles">Developers</Nav.Link>
        <Nav.Link as={Link} to="/register">
          Register
        </Nav.Link>
        <Nav.Link as={Link} to="/login">
          Login
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  );

  return (
    <Navbar
      className="pl-5 nav-bar"
      sticky="top"
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <NavbarBrand href="/">
        <i className="fas fa-code" /> DevConnector
      </NavbarBrand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />

      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </Navbar>
  );
};

NavBar.propTypes = {
  logout: PropTypes.func.isRequired,
  authReducer: PropTypes.object.isRequired,
};

const mapStateProps = (state) => ({
  authReducer: state.authReducer,
});

export default connect(mapStateProps, { logout })(NavBar);
