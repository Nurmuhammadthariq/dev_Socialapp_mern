import React from 'react';
import { Navbar, NavbarBrand, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const guestLinks = (
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="nav justify-content-end">
        <Nav.Link as={Link} to="/">
          <i className="fas fa-laptop" />
          Developers
        </Nav.Link>
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
      <NavbarBrand>
        <i className="fas fa-code" /> DevConnector
      </NavbarBrand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />

      {guestLinks}
    </Navbar>
  );
};

export default NavBar;
