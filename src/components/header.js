import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import './header.css';

const Header = () => {
    return (
        <div className="custom-header">
            <Navbar bg="dark" expand="lg">
                <Navbar.Brand>
                    <Link to="/">
                        Dictionary Manager
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <div className="navbar-links">
                            <Link to="/rules">
                                    Rules
                            </Link>
                        </div>
                        <div className="navbar-links">
                            <Link to="/dictionary">
                                    Dictionary List Manager
                            </Link>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
};

export default Header;
