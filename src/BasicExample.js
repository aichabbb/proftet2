import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import './index.css';

function BasicExample() {
  return (
    <Navbar  expand="lg" className='nv' style={{backgroundColor: 'rgba(0, 0, 0, 0)',}}>
      <Container style={{marginLeft:'50%'}}>
        <Navbar.Brand href="#home" className='logo'>Aicha</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className='home'>Home</Nav.Link>
            <Nav.Link href="#link" className='phone'>0649951105</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;