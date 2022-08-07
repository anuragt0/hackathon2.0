import {useEffect, useState, } from "react";
// import areaContext from "../context/areas/areaContext";
import AreaStruc from "../components/AreaStruc";

const Area = () => {
    const host = "http://localhost:5000";
    // const context = useContext(areaContext);
    // console.log("context is: ", context);

    // const {areas, setAreas, getAreas} = context;
    // const ref = useRef(null);

    const [areas, setAreas] = useState([]);

    useEffect(() => {
        fetch(`${host}/api/getareas`, {
        method: 'GET', 
        headers: {
            'Content-Type': 'application/json',
        },
        // body: JSON.stringify(data),
        })
        .then((response) => response.json())
        .then((data) => {
            // console.log('Success:', data);
            setAreas(data);
        })
        .catch((error) => {
        console.error('Error:', error);
        });
        
        // getAreas();
        // eslint-disable-next-line
    }, [])

  return (
    <>
        <div className="row my-3">
        {areas.map((area)=>{
            // {console.log("area is: ",area);}
            return <AreaStruc key={area._id} area={area}/>
        })}
        </div>
    </>
  )
}

export default Area