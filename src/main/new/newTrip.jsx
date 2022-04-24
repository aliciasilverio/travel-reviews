import { Button, Form, FormGroup, FormLabel } from 'react-bootstrap';
import { useState } from "react";


const NewPlaceTravelled = (props) => { // New Trip Component
    const [showing, setShowing] = useState(false)
    const [newTrip, setNewTrip] = useState({
        image: "",
        location: "", //name
        experience: "", //experience
        unitClass: "", //unitClass
    })
    //function that will shift between showing not showing, gets called in buttons on click

    //tracks valid state, can be used for multiple functions regarding validation and testing
    const [isValidState, setIsValidState] = useState({valid: true, message: ""})
//keeps track of changes in the form field, and logs them in state
    const handleInputChange = (e) => {
        setNewTrip({
            ...newTrip,
            [e.target.name]: e.target.value
        })
    }
    //this function prevents the page from refreshing and chesks whether or not the state is valid before allowing the creation of a new Trip
    const submitNewTrip = (e) =>{
        e.preventDefault()
        let validSubmission = true;
        if(validSubmission){
        props.createNewTrip(newTrip)
        setNewTrip({
            image: "",
            location: "",
            experience: "",
            unitClass: "",
        })
        setIsValidState({
            valid: true,
            message:""
        })
        setShowing(false);
        }
    }
    return (
        <>
        {
            showing 
            ?

            
            <div id ="new-trip-form">
                <Button onClick={toggleShowing}>Close</Button>
                <Form onSubmit={submitNewTrip}>
                    {isValidState.valid ? null: <p className="form-error">{isValidState.message}</p>}
                    {props.newTripServerError ? <p className="form-error">{props.newTripServerError}</p> : null}
                    Image: <input required onChange ={handleInputChange} type = "text" name ="image" value={newTrip.image}/>                    
                    Location: <input required onChange ={handleInputChange} type = "text" name ="location" value={newTrip.name}/>
                    Experience: <input required onChange ={handleInputChange} type = "text" name ="experience" value={newTrip.experience}/>
                    {/* Unit Class: <input required onChange ={handleInputChange} type = "text" name ="unitClass" value={newTrip.unitClass}/>
                    Joins: <input required onChange ={handleInputChange} type = "text" name ="joins" value={newTrip.joins}/>
                    Bio: <input required onChange ={handleInputChange} type = "text" name ="bio" value={newTrip.bio}/> */}

                    <br></br>
                <Button type="submit">Submit</Button>
                </Form>
               
        </div>
        :
        <Button onClick={toggleShowing}>Create New Trip</Button>
        }
        </>
    )
}
//export for use in main page
export default NewPlaceTravelled; 