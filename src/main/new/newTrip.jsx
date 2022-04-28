import { Button, Form, FormGroup, FormLabel, Modal } from 'react-bootstrap';
import { useState } from "react";


const NewPlaceTravelled = (props) => { // New Trip Component
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [showing, setShowing] = useState(false)
    const [isValidState, setIsValidState] = useState({valid: true, message: ""})
    // 1. function that setShowing function as TRUE! = !true when clicked on 
    const toggleShowing = () => {
        // 2. set variable to the opposite
        setShowing(!showing)
    }
    
    const [newTrip, setNewTrip] = useState({
      tripName: "",  
      image: "",
      location: "",
      experience: "",
    })
  
    const handleInputChange = (e) => {
      setNewTrip({
        ...newTrip,
        [e.target.name]: e.target.value
      })
    }
  
    const submitNewTrip = (e) => {
      e.preventDefault();
  
      props.createNewTrip(newTrip);
      setNewTrip({
        tripName: "",
        image: "",
        location: "",
        experience: "",
      });
  
      setShowing(false);
    }
  
    return(
      <>

<div className=''>
                    <Form onSubmit={submitNewTrip}>
                        {isValidState.valid ? null : <p className="form-error">{isValidState.message}</p>}
                        {props.newItemServerError ? <p className="form-error">{props.newItemsServerError}</p> : null}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Trip Name:</Form.Label>
                            <Form.Control onChange={handleInputChange} value={newTrip.tripName} type="text" name="tripName"/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Image URL:</Form.Label>
                            <Form.Control onChange={handleInputChange} value={newTrip.image} type="text" name="image"/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Location:</Form.Label>
                            <Form.Control onChange={handleInputChange} value={newTrip.location} type="text" name="location"/>
                        </Form.Group>
                         <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Experience</Form.Label>
                            <Form.Control as="textarea" onChange={handleInputChange} value={newTrip.experience} type="number" name="experience"/>
                        </Form.Group>
                        <Button type="submit" variant="light" onClick={handleClose}>
                            Submit
                        </Button>
                    </Form>
                </div>
      </>
    )
  }
export default NewPlaceTravelled; 