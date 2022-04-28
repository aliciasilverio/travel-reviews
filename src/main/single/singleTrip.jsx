import React, { useState } from 'react';
import { Button, Form, FormGroup, FormLabel, Modal } from 'react-bootstrap';

const SingleTrip = (props) => { 
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [showing, setShowing] = useState(false)
    const [isValidState, setIsValidState] = useState({valid: true, message: ""})
    const toggleShowing = () => {
        setShowing(!showing)
    }

  
    const [updateTrip, setUpdateTrip] = useState({
      tripName: props.trip.tripName, 
      image: props.trip.image,
      location: props.trip.location,
      experience: props.trip.experience,
      _id: props.trip._id,
    });
  
    const handleInputChange = (e) => {
      setUpdateTrip({
        ...updateTrip,
        [e.target.name]: e.target.value
      })
    }
  
    const submitUpdateTrip = (e) => {
      e.preventDefault();
      props.updateTrip(props.trip._id, updateTrip);
      setShowing(false);
    }

    const deleteButton = ()=>{
        props.deleteTrip(props.trip._id);
        handleClose();
    }
    
  
    return (

        <>

        <div className=''>
                    </div>
                    <Button variant="light" onClick={handleShow} className="add-your-button">
                    {props.trip.tripName}
                    </Button>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header className='new-trip-head' closeButton>
                            <Modal.Title >Edit your Trip!</Modal.Title>
                        </Modal.Header>
                        <Modal.Body className='new-body'>
                            <Form onSubmit={submitUpdateTrip}>
                                {isValidState.valid ? null : <p className="form-error">{isValidState.message}</p>}
                                {props.newItemServerError ? <p className="form-error">{props.newItemsServerError}</p> : null}
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Trip Name:</Form.Label>
                                    <Form.Control onChange={handleInputChange} value={updateTrip.tripName} type="text" name="tripName"/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Image URL:</Form.Label>
                                    <Form.Control onChange={handleInputChange} value={updateTrip.image} type="text" name="image"/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Location:</Form.Label>
                                    <Form.Control onChange={handleInputChange} value={updateTrip.location} type="text" name="location"/>
                                </Form.Group>
                                 <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Experience</Form.Label>
                                    <Form.Control as="textarea" onChange={handleInputChange} value={updateTrip.experience} type="number" name="experience"/>
                                </Form.Group>
                                <Button type="submit" variant="outline-dark" onClick={handleClose}>
                                    Update
                                </Button>
                                <Button onClick={deleteButton}>Delete</Button>
                            </Form>
                        </Modal.Body>
                    </Modal>
              </>
        


    // //   <div className="">
    // //     <h2>Trip Name: {props.trip.tripName}</h2>
    // //     <div className="">
    // //       <img src={props.trip.image} alt={props.trip.tripName} />
    // //       <p>location: {props.trip.location}</p>
    // //       <p>experience: {props.trip.experience}</p>
    // //     </div>
    //     <Button onClick={()=>{props.deleteTrip(props.trip._id);}}>Delete</Button>
    //     <>
    //     {
    //       showing ?
    //         <div id="">
    //           <Button onClick={toggleShowing}>X</Button>
    //           <form onSubmit={submitUpdateTrip}>
    //             Image URL: <input onChange={handleInputChange} value={updateTrip.image} type="text" name="image"/>
    //             location: <input onChange={handleInputChange} value={updateTrip.location} type="number" name="rating"/>
    //             experience: <input onChange={handleInputChange} value={updateTrip.experience} type="text" name="cpu"/>
    //             <Button type="submit">Submit</Button>
    //           </form>
    //         </div>
    //       :
    //         <Button onClick={toggleShowing}>Edit This Trip</Button>
    //     }
    //     </>
    //   </div>
    )
  }
  


export default SingleTrip;