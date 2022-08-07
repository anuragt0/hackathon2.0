import React from 'react'

const SlotStruc = (props) => {
    console.log("props are:", props.slot);
    const isBooked = props.slot.isBooked;
  return (
    <div className='showpointer' style={{display:"inline-block"}}>
    <div  title={isBooked?"Booked":"Not Booked"} id={`${props.slot.number}`}  style={{height: "100px", width:"100px", border:"8px solid", margin:"10px", display:"inline-block", backgroundColor: isBooked ? "#e28743" : "#abdbe3", borderRadius:"20px" }}>
        <h1 style={{display:"inline-block"}}>{props.slot.number}</h1>
    </div>
    </div>
  )
}

export default SlotStruc
