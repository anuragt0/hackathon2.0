import React, { useContext, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import AreaContext from '../context/AreaContext';

const AreaStruc = (props) => {
    const ref = useRef(null);

    const navigate = useNavigate();
    const host = "http://localhost:5000";

    const context = useContext(AreaContext);
    const {area, setArea} = context;
    // console.log("clicked area is", area);

    const bookSlot =()=>{
        const areaID = props.area._id;
        const data = {"areaID": areaID};
        // console.log("Show all slots of area with id: ",areaID);
        setArea(props.area);
        navigate(`/areas/slots`);
    }
    const reviewFunc = ()=>{
        console.log('Clicked on review');
        ref.current.click();
    }

  return (
        <>
         {/* MODAL STARTING */}
      <button
        ref={ref}
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Review
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div className="modal-body">
              {/* Form */}
              <form className="my-3">
                <div className="mb-3">
                  <label htmlFor="etitle" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="etitle"
                    name="etitle"
                    aria-describedby="emailHelp"
                    // value={note.etitle}
                    // onChange={onChange}
                    // minLength={5}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="edescription" className="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="edescription"
                    name="edescription"
                    // value={note.edescription}
                    // onChange={onChange}
                    // minLength={5}
                    // required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="etag" className="form-label">
                    Tag
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="etag"
                    name="etag"
                    // value={note.etag}
                    // onChange={onChange}
                    // minLength={5}
                    // required
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button 
                // ref={refClose}
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                // onClick={handleClick}
                type="button"
                className="btn btn-primary"
              >
                Submit review
              </button>
            </div>
          </div>
        </div>
      </div>
      
          <div className="card" id={`${props.area._id}`} style={{width: "18rem", display:"inline-block", padding: "20px", margin: "40px"}}>
            <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/183.webp" className="card-img-top" alt="..."/>
            <div className="card-body">
                <p className="card-title"> <b>Name: </b> {props.area.name}</p>
                <p className="card-text"><b>Address: </b>{props.area.address}</p>
                <p className="card-text"><b>Ratings: </b>{props.area.avgRating==null?"unrated":props.area.avgRating+"/5"}</p>

                <div className="btn-toolbar">
                    <button type="button" id="btnSubmit" onClick={reviewFunc} className="btn btn-primary btn-sm mx-3">Review</button>
                    <button type="button" id="btnCancel" onClick={bookSlot} className="btn btn-primary btn-sm mx-3">Book Slot</button>
                </div>
            </div>
        </div>
    
        </>
  )
}

export default AreaStruc
