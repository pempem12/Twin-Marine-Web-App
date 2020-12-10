
import React  from 'react';
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

const MainNavbar = (props) => {
    return (
        <Navbar className="navbar-light bg-light" collapseOnSelect expand="md" bg="light" variant="light">
            <Navbar.Brand href="/">
                <img src="/images/DTM.png" height="40px" className="d-inline-block align-top" alt="Digital Twin Marine Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="dtm-navbar"></Navbar.Toggle>
            <Navbar.Collapse id="dtm-navbar">
                <Nav className="ml-auto" activeKey={props.activeKey}>
                    <Nav.Link href="#" as="button" className="btn btn-outline-secondary"><i className="fas fa-plus"></i> Request New Service</Nav.Link>
                    <Nav.Link href="/ship" eventKey="ship">Ship Viewer</Nav.Link>
                    <Nav.Link href="/guests" eventKey="guests">Guest Management</Nav.Link>
                    <Nav.Link><i className="fas fa-user-circle" as="p"></i> {props.email}</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default MainNavbar;