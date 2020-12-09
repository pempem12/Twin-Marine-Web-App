import React, { useState } from 'react';
import {Form, Button, Container, Row, Col} from "react-bootstrap";
import "./css/Style.css";



const Login = (props) => { 

    return(
        <Container className="LoginBox" fluid>
            <img className="LoginBox__Logo" src="https://portal.digitaltwinmarine.com/assets/images/logo-main.svg" alt=""/>
            <Form className = 'LoginBox__Form'>
                <Form.Group>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                
                <a href="forgot.html">Forgot Password</a>
                <Button className="float-right" variant="success" type="submit">
                    Login
                </Button>
            </Form>      
        </Container>
    );
};

export default Login;
