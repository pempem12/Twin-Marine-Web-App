import React, { useState } from 'react';
import { Button, Modal} from 'react-bootstrap';
import MainNavbar from "../components/Navbar"
import AuthRedirect from "../components/AuthRedirect"
import ListGroup from "react-bootstrap/ListGroup";
// import RenderOnce from "../components/RenderOnce"
// import "./css/Style.css";

const Guests = (props) => {
	const [ user_st, setState_User ] = useState({ email: "" });
	AuthRedirect(setState_User);

    const [nameAdd, setNameAdd] = useState(false);

    const handleCloseAdd = () => setNameAdd(false);
    const handleShowAdd = () => setNameAdd(true);


    const [nameRemove, setNameRemove] = useState(false);

    const handleCloseRemove = () => setNameRemove(false);
    const handleShowRemove = () => setNameRemove(true);

    const [list_s, list_setState] = useState([
        {
        name: "john smith",
        email: "jsmith@gmail.com"
        },


        {
        name: "Jaden brown",
        email: "jbrown@gmail.com"
        },

        {
        name: "Jill Jones",
        email: "jjones@gmail.com"
        },

        {
        name: "Jaden brown",
        email: "jadbrown@gmail.com"
        },
        {
        name: "john smith",
        email: "jsmith@gmail.com"
        },


        {
        name: "Jaden brown",
        email: "jbrown@gmail.com"
        },

        {
        name: "Jill Jones",
        email: "jjones@gmail.com"
        },

        {
        name: "Jaden brown",
        email: "jadbrown@gmail.com"
        },
        {
        name: "john smith",
        email: "jsmith@gmail.com"
        },


        {
        name: "Jaden brown",
        email: "jbrown@gmail.com"
        },

        {
        name: "Jill Jones",
        email: "jjones@gmail.com"
        },

        {
        name: "Jaden brown",
        email: "jadbrown@gmail.com"
        },

        {
        name: "Jaden brown",
        email: "jadbrown@gmail.com"
        },
        {
        name: "john smith",
        email: "jsmith@gmail.com"
        },


        {
        name: "Jaden brown",
        email: "jbrown@gmail.com"
        },

        {
        name: "Jill Jones",
        email: "jjones@gmail.com"
        },

        {
        name: "Jaden brown",
        email: "jadbrown@gmail.com"
        }

    ]);

    return (
        <div>
            <MainNavbar activeKey="guests" email={user_st.email}></MainNavbar>
            <div className="container">
                <div className="row justify-content-between">
                    <h1 className="Title col-3">Guest List</h1>
                    <div className="mr-4">
                        <Button type="button" name="remove" variant="danger" onClick={handleShowRemove} className="mt-2 ml-auto" style={{ display: "inline=block" }}>- Remove Guest</Button>
                        <Button type="button" name="add" variant="success" onClick={handleShowAdd} className="mt-2 ml-4" style={{ display: "inline=block" }}>+ Add Guest</Button>
                    </div>
                </div>
                <ListGroup className="Names">
                    { list_s.map((item) => {
                        return (
                            <ListGroup.Item key={item.name}>{item.name} </ListGroup.Item>                        
                        );
                    })}
                </ListGroup>
                <br></br>
                <div className = 'Guests__Button'>
                    <Modal show={nameAdd} onHide={handleCloseAdd}>
                        <Modal.Header closeButton>
                        <Modal.Title>Add a new Guest</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            Enter the guest's name: 
                            <br></br>
                            Enter the guest's email: 
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseAdd}>
                            Cancel
                        </Button>
                        <Button variant="primary" onClick={handleCloseAdd}>
                        Add Guest
                        </Button>
                        </Modal.Footer>
                    </Modal>
                    
                    <Modal show={nameRemove} onHide={handleCloseRemove}>
                        <Modal.Header closeButton>
                        <Modal.Title>Remove a Guest</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            Enter the guest's email: 
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseRemove}>
                            Cancel
                        </Button>
                        <Button variant="primary" onClick={handleCloseRemove}>
                            Remove Guest
                        </Button>
                        </Modal.Footer>
                    </Modal>
                </div>     
            </div>
        </div>
    );
};


export default Guests;