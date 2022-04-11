import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap';
import { userLogout } from '../../apis/userApis';
import logo from '../../assets/img/logo.png';
import './header.css'

export const Header = () => {

  const logout = () =>{
    userLogout();
    sessionStorage.removeItem('accessJWT');
    localStorage.removeItem('CRM');
  }
  return (
    <Navbar collapseOnSelect variant='dark' bg='info' expand='md'>
        <Navbar.Brand>
            <img src={logo} alt="logo" width='50px' style={{'marginLeft':'10px'}} />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls='basic-navbar-nav'/>
        <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <LinkContainer to='/dashboard'>
                <Nav.Link style={{'color': 'white'}}>Dashboard</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/recordlist'>
                <Nav.Link  style={{'color': 'white'}}>Sales</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/'> 
                <Nav.Link style={{'color': 'white'}} onClick={logout}>Logout</Nav.Link>
              </LinkContainer>
            </Nav>
        </Navbar.Collapse>
    </Navbar>

  )
}
