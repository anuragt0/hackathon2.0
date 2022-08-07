import {React, useContext, useState, useEffect} from 'react'
import AreaContext from '../context/AreaContext';
import SlotStruc from './SlotStruc';

const Slots = () => {
    const context = useContext(AreaContext);
    const {area, setArea} = context;
    const host = "http://localhost:5000";

    const [slots, setSlots] = useState([]);

    useEffect(() => {
        const areaID = area._id;
        const data = {"areaID": areaID};
        // console.log("Show all slots of area with id: ",areaID);
        fetch(`${host}/api/getslots`, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            })
            .then((response) => response.json())
            .then((dataa) => {
                console.log('From slots component:', dataa);
                setSlots(dataa);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    
      
    }, [])

  return (
    <div>
        <h1>Slots are: </h1>
        
        {slots.map((slot) => {
          return (
            <SlotStruc key={slot._id} slot={slot} />
          );
        })}
    </div>
  )
}

export default Slots