import React, { useState } from 'react';
import { Button, Form, FormGroup, FormLabel } from 'react-bootstrap';

const SingleTrip = (props) => { 
    const [showing, setShowing] = useState(false)
    const [updateTrip, setUpdateTrip] = useState({
        image: props.trip.image,
        location: props.trip.location,
        experience: props.trip.experience,
        // unitClass: props.trip.unitClass,
        _id: props.trip._id
    })
    const toggleShowing = () => {
        setShowing(!showing)
    }
    //keeps track of changes in the form field, and logs them in state
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
        <>
            {
                showing
                    ?
                    <div id="edit-trip-form">
                        <button onClick={toggleShowing}>Close</button>
                        <form onSubmit={submitUpdateTrip}>
                            Image: <input required onChange={handleInputChange} type="text" name="image" value={updateTrip.image} />
                            Location: <input required onChange={handleInputChange} type="text" name="location" value={updateTrip.location} />
                            Experience: <input required onChange={handleInputChange} type="text" name="experience" value={updateTrip.experience} />
                            {/* Unit Class: <input required onChange={handleInputChange} type="text" name="unitClass" value={updateTrip.unitClass} />
                            Joins: <input required onChange={handleInputChange} type="text" name="joins" value={updateTrip.joins} />
                            Bio: <input required onChange={handleInputChange} type="text" name="bio" value={updateTrip.bio} /> */}

                            <br></br>
                            <button type="submit">Submit</button>
                        </form>

                    </div>
                    :
                    <button onClick={toggleShowing}>Edit Travel Experience</button>
            }
            <div className="index-single-trip">
                <h2>Location: {props.trip.location}</h2>
                <h3>Experience: {props.trip.experience}</h3>
                {/* <h4>Starting Class: {props.trip.unitClass}</h4>
                <h5>How to Unlock: {props.trip.joins}</h5>
                <p>Bio: {props.trip.bio}</p> */}
            </div>
            <button onClick={() => {props.deleteTrip(props.trip._id)}}>Delete</button>
            <br></br>
        </>
    )
}



export default SingleTrip;