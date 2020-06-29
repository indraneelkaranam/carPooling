import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { Form , FormControl , Button } from 'react-bootstrap';
import logoinr from './logoinr.jpg';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import TagFacesIcon from '@material-ui/icons/TagFaces';
import Avatar from '@material-ui/core/Avatar';
// const useStyles = makeStyles(theme => ({
//     root: {
//       display: 'flex',
//       justifyContent: 'center',
//       flexWrap: 'wrap',
//       padding: theme.spacing(0.5),
//     },
//     chip: {
//       margin: theme.spacing(0.5),
//     },
//   }));
// const classes = useStyles();
class Toper3 extends Component {
    
  render() {
    return (
      <div>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Navbar.Brand href="#home"><img src={logoinr} alt="logo"/></Navbar.Brand> 
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Navbar.Brand href="dashboard">DashBoard</Navbar.Brand>
            <Navbar.Brand href="notifications">Notifications</Navbar.Brand>
            <Navbar.Brand href="myrides">My Rides</Navbar.Brand>
            <Navbar.Brand href="bookings">Bookings</Navbar.Brand>
            
            <Navbar.Brand href="logout">Logout</Navbar.Brand>
            {/*<NavDropdown title="Click Here" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Login</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Sign Up</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>*/}
          </Nav>
          {/* <img src={logoinr} alt="logo"/> */}
          <Chip
          avatar={<Avatar alt="Natacha" src={logoinr} />}
          label={`${this.props.children}`}
          color="secondary"
          variant="outlined"
          />          
          {/* <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Navbar>

      </div>
    );
  }
}

export default Toper3;