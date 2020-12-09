import React, { useState } from 'react';
import { Button, Modal} from 'react-bootstrap';
import ListGroup from "react-bootstrap/ListGroup";
// import RenderOnce from "../components/RenderOnce"
import "./css/Style.css";

const Guests = (props) => {
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

    // Fill the list only one time (don't update whenever the state changes)
    // RenderOnce(() => {
    //     console.log("Hello!");

    //     fetch("/api/v1/getList")
    //         .then(res => res.json())
    //         .then(list => list_setState(list));
    // });

    return (
        <div className = 'Guests'>
            <h1 className="Title">Guest List</h1>
            <ListGroup className="Names">
                { list_s.map((item) => {
                    return (
                        <ListGroup.Item key={item.name}>{item.name} </ListGroup.Item>                        
                    );
                })}
            </ListGroup>
            <br></br>
            <div className = 'Guests__Button'>
                <div>
                    <Button type="submit" name="add" variant="success" onClick={handleShowAdd}>+</Button>
                    <label for="add">Add Guest</label>
                </div>

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
                
                <div>
                    <Button type="submit" name="remove" variant="danger" onClick={handleShowRemove}>-</Button>
                    <label for="remove">Remove Guest</label>
                </div>

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
    );
};


export default Guests;
