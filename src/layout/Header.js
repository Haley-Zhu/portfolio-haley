import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

class Header extends React.Component {
  render() {
    return(
      <Navbar id="header" fixed="top">
        <Nav.Link>Home</Nav.Link>
        <Nav.Link>About</Nav.Link>
        <Nav.Link>Projects</Nav.Link>
        <Nav.Link>Skills</Nav.Link>
        <Nav.Link>Contact</Nav.Link>
      </Navbar>
    );
  }
}

export default Header;
