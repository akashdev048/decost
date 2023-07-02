
import React, { Component } from 'react';
import "./Header.css";
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import UserProfile from "../../assets/images/user-profile.jpg"
import logo from "../../assets/images/logo.png";
import searchIcon from "../../assets/images/search-icon.svg";
import bellIcon from "../../assets/images/bell-icon.svg";
const Header = () =>  {



        return (
            <div className='header'>
                <Navbar expand="lg" className="navbar-">
                    <Container fluid className='px-4'>
                        <Navbar.Brand className='brand-logo' href="#"><img src={logo} alt='' /><span className='logo-txt'>DCost</span></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <div className='leftside-search'>
                                <div className='input-group'>
                                    <button type='button' className='btn btn-search-top'><img src={searchIcon} /></button>
                                    <input type='text' placeholder='Search...' className='form-control control-serch-top' />
                                </div>
                            </div>                            
                            <div className='right-notifi-mt ms-auto'>
                                <span className='bell-icon-web'><button className='btn btn-bell-notify'><img src={bellIcon} alt='notification' /></button></span>
                            </div>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    
}

export default Header;