import React, {useState, useEffect} from 'react'
import SingleTrip from './single/singleTravel';
import NewPlaceTravelled from './new/newTrip'; 
const MainPageComponent = () => {
    // const [mainPage, setmainPage] = useState();
    const [trips, setTrips] = useState([])
    const[newTripServerError, setNewTripServerError] = useState("")
    const createNewTrip = async (newTrip) => {
        console.log(newTrip);
        console.log("Let's Create This")
        
        //send request to back-end
        const apiResponse = await fetch("http://localhost:3000/", {
        method: "POST",
        body: JSON.stringify(newTrip),
        headers: {
            "Content-Type": "application/json"
        }
        })
        //parse the response
        const parsedResponse = await apiResponse.json()
        //if successful add item to state
        console.log(parsedResponse)
        if(parsedResponse.success){
            setTrips([...trips, newTrip])
        }else{
            setNewTripServerError(parsedResponse.data)
            //show error message in form
        }            
    }
     //delete aspect of route
     const deleteTrip = async (idToDelete) => {
        try{ 
            //send request to back end
            const apiResponse = await fetch(`http://localhost:3000/${idToDelete}`, {   
            method: 'DELETE'
            })
            //parse response
            const parsedResponse = await apiResponse.json()
            if(parsedResponse.success){
                const newTrip = trips.filter(trip => trip._id !== idToDelete)
                setTrips(newTrip)
            }
            else{
                //TODO
            }
            console.log(parsedResponse)
        }catch(err){
            console.log(err)
        }
        console.log("deleting item ID" + idToDelete)
       
         
    }
    const updateTrip = async (idToUpdate, tripToUpdate) => {
        const apiResponse = await fetch(`http://localhost:3000/${idToUpdate}`, {
            method: "PUT",
            body: JSON.stringify(tripToUpdate),
            headers: {
                "Content-Type": "application/json"
            }
        })
            const parsedResponse = await apiResponse.json();
        if(parsedResponse.success){
        //one line version that uses a function to check the item to see if its the one to update, if not send old version
            const newTrip = trips.map(trip => trip._id === idToUpdate ? tripToUpdate : trip)
            setTrips(newTrip)
        }else{
            //TODO
        }
            
        }
    const getTrips = async () => {
        try{
            const trips = await fetch("http://localhost:3000/")
            const parsedTrips = await trips.json();
            setTrips(parsedTrips.data)

        }catch(err){
            console.log(err)
        }
    }
    useEffect(()=>{getTrips()}, [])
    return (
        <div>
        <NewPlaceTravelled
            newTripServerError={newTripServerError}
            createNewTrip={createNewTrip}>
        </NewPlaceTravelled>
        <br></br>
        <br></br>
        {trips.map((trip)=> {
            return <SingleTrip key ={trip._id} trip={trip} updateTrip={updateTrip} deleteTrip={deleteTrip}></SingleTrip>
        })}
        </div>
        )
    

}
export default MainPageComponent