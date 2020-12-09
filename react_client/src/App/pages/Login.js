import React from 'react';
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

const Login = (props) => {
    const loginForm = (e) => {
        e.preventDefault();
        
        const email = document.getElementById("inputEmail").value
        const pass = document.getElementById("inputPassword").value

        fetch("/api/v1/user/login", {
            method: "POST"
            , headers: { "Content-Type": "application/json" }
            , body: JSON.stringify({ email: email, password: pass })
        })
        .then(response => {
            if (response.status !== undefined && response.status === 200) {
                window.location.href = "/ship"
            } else {
                return response.json();
            }
        })
        .then(data => console.log(data, "Success"))
        .catch(err => console.log(err, "Error"));
    };
    
    return (
        <center className="mt-4">
            <Card style={{width: "50rem"}}>
                <Card.Body>
                    <Card.Title><img src="/images/DTM.png" width="100%" alt="DTM"></img></Card.Title>
                    <Form>
                        <Form.Group>
                            <label htmlFor="inputEmail">Email address</label>
                            <input type="email" className="form-control" id="inputEmail"></input>
                            {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
                        </Form.Group>
                        <Form.Group>
                            <label htmlFor="inputPassword">Password</label>
                            <input type="password" className="form-control" id="inputPassword"></input>
                        </Form.Group>
                        <button className="btn btn-primary" style={{ float: "right" }} onClick={loginForm}>Login</button>
                    </Form>
                </Card.Body>
            </Card>
        </center>
    );
};

export default Login;
