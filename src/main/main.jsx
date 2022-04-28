import React, {useState, useEffect} from 'react'
import SingleTrip from './single/singleTrip';
import NewPlaceTravelled from './new/newTrip'; 
const MainPageComponent = () => {
    const [trips, setTrips] = useState([]);
    const getTravels = async () => {
      try {
        const travels = await fetch ("http://localhost:3000/trips/");
        const parsedTravels = await travels.json();
        setTrips(parsedTravels.data);
      } catch (err) {
        console.log(err);
      }
    }
  
    const deleteTrip = async (idToDelete) => {
      try {
        const apiResponse = await fetch(`http://localhost:3000/trips/${idToDelete}/`, {
          method: "DELETE"
        })
        const parsedResponse = await apiResponse.json();
        if(parsedResponse.success){
          const newTravels = trips.filter(travel=> travel._id !== idToDelete);
          setTrips(newTravels);
        }
      } catch (err) {
        console.log(err);
      }
      console.log("deleting travel ID");
    }
  
    const createNewTrip = async (newTrip) => {
      const apiResponse = await fetch("http://localhost:3000/trips/", {
        method: "POST",
        body: JSON.stringify(newTrip),
        headers: {
          "Content-Type": "application/json"
        }
      });
  
      const parsedResponse = await apiResponse.json();
  
      if(parsedResponse.success){
        setTrips([parsedResponse.data, ...trips]);
      }
    }
  
    const updateTrip = async(idToUpdate, tripToUpdate) => {
      const apiResponse = await fetch(`http://localhost:3000/trips/${idToUpdate}/`, {
        method: "PUT",
        body: JSON.stringify(tripToUpdate),
        headers: {
          "Content-Type": "application/json"
        }
      })
  
      const parsedResponse = await apiResponse.json();
  
      if(parsedResponse.success){
        const newTrips = trips.map(travel=> travel._id === idToUpdate ? tripToUpdate : travel);
        setTrips(newTrips);
      }
    }
  
    useEffect(() => {
      getTravels()
    }, []);
  
    return (
      <div>
        <NewPlaceTravelled
          createNewTrip={createNewTrip}>
        </NewPlaceTravelled>
        {trips.reverse().map(travel => {
          return <SingleTrip 
              key={travel._id}
              trips={travel}
              deleteTrip={deleteTrip}
              updateTrip={updateTrip}>
            </SingleTrip>
        })}
      </div>
    )
}
export default MainPageComponent