import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

class Header extends React.Component {
  render() {
    return (
      <Navbar id="header" fixed="top" className="header">
        <Nav.Link href="#home" className="header__item">Home</Nav.Link>
        <Nav.Link href="#about" className="header__item">About</Nav.Link>
        <Nav.Link href="#projects" className="header__item">Projects</Nav.Link>
        <Nav.Link href="#skills" className="header__item">Skills</Nav.Link>
        <Nav.Link href="#contact" className="header__item">Contact</Nav.Link>
      </Navbar>
    );
  }
}

export default Header;
