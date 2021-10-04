import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
//  menu bar 
const Header = () => {
    return (
        <div>
          <Navbar bg="dark" variant="dark" expand="lg" className="mb-5">
           <Container>
            <Navbar.Brand  as={Link} to="/home">Modern Coaching Center</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/home">Home</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/service">Services</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            </Nav>
            </Navbar.Collapse>
           </Container>
          </Navbar>
        </div>
    );
};

export default Header;