
import React, {useState}  from 'react';
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
// import Button from 'react-bootstrap/Button';

const MainNavbar = (props) => {
    return (
        <Navbar collapseOnSelect expand="md" bg="primary" variant="dark">
            <Navbar.Brand href="/">
                <img src="/images/DTM.png" height="40px" className="d-inline-block align-top" alt="Digital Twin Marine Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="dtm-navbar"></Navbar.Toggle>
            <Navbar.Collapse id="dtm-navbar">
                <Nav className="mr-auto" activeKey={props.activeKey}>
                    <Nav.Link href="./Home" eventKey="home">Home</Nav.Link>
                    <Nav.Link href="./List" eventKey="list">List</Nav.Link>
                    <Nav.Link href="./Login" eventKey="login">Login</Nav.Link>
                    <Nav.Link href="./About" eventKey="about">About</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
            
    );
};

export default MainNavbar;