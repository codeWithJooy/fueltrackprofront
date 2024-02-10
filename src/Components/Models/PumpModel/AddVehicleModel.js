import React,{useEffect, useState} from "react";
import "../Model.css";

const AddVehicleModel = ({ setVehicleModel=""}) => {

  const [data,setData]=useState({
    pumpId:"123456",
    partyId:"",
    vehicle:"",
  })

  const handleChange=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  const handleSelect=(e)=>{
    setData({...data,group:e.target.value})
  }
  const handlePumpAdd=()=>{
    (async()=>{
      
    })()
  }

  return (
    <div className="modelContainer">
      <div className="modelCard">
        <img
          src="Assets/HQ/close.png"
          className="closeModel"
          onClick={() => setVehicleModel(false)}
        />
        <div className="modelTitle">
          <p>Add Party Vehicle</p>
        </div>
        <div className="modelInputContainer">
          <div className="modelHalf">
            <label>Party Name</label>
            <select>
                <option>Party 1</option>
                <option>Party 2</option>
            </select>
          </div>
          <div className="modelHalf">
            <label>Vehicle No.</label>
            <input 
              type="text"
              name="vehicle"
              value={data.vehicle}
            />
          </div>
        </div>
        <div className="modelInputContainer">
          <button className="addModel" onClick={handlePumpAdd}> Add Vehicle</button>
          <button className="cancelModel" onClick={() => setVehicleModel(false)}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddVehicleModel;