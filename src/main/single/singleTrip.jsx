import React, { useState } from 'react';
import { Button, Form, FormGroup, FormLabel } from 'react-bootstrap';

const SingleTrip = (props) => { 
    const [showing, setShowing] = useState(false);
    const toggleShowing = () => {
      setShowing(!showing);
    };
  
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
  
    return (
      <div className="">
        <h2>Trip Name: {props.trip.tripName}</h2>
        <div className="">
          <img src={props.trip.image} alt={props.trip.tripName} />
          <p>location: {props.trip.location}</p>
          <p>experience: {props.trip.experience}</p>
        </div>
        <Button onClick={()=>{
          props.deleteTrip(props.trip._id);
        }}>Delete</Button>
        <>
        {
          showing ?
            <div id="">
              <Button onClick={toggleShowing}>X</Button>
              <form onSubmit={submitUpdateTrip}>
                Image URL: <input onChange={handleInputChange} value={updateTrip.image} type="text" name="image"/>
                location: <input onChange={handleInputChange} value={updateTrip.location} type="number" name="rating"/>
                experience: <input onChange={handleInputChange} value={updateTrip.experience} type="text" name="cpu"/>
                <Button type="submit">Submit</Button>
              </form>
            </div>
          :
            <Button onClick={toggleShowing}>Edit This Trip</Button>
        }
        </>
      </div>
    )
  }
  


export default SingleTrip;