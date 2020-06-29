import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { Form , FormControl , Button } from 'react-bootstrap';
import logoinr from './logoinr.jpg';


class Toper2 extends Component {
  render() {
    return (
      <div>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Navbar.Brand href="#home"><img src={logoinr} alt="logo"/></Navbar.Brand> 
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Navbar.Brand href="home">Home</Navbar.Brand>
            <Navbar.Brand href="link">About Us</Navbar.Brand>

            
            {/*<NavDropdown title="Click Here" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Login</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Sign Up</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>*/}
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>

      </div>
    );
  }
}

export default Toper2;