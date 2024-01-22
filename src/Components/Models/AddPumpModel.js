import React,{useEffect, useState} from "react";
import "./Model.css";
import { addPump } from "../../actions/pumpAction";

const AddPumpModel = ({ setPumpModel,ownerId}) => {

  const [data,setData]=useState({
    ownerId,
    name:"",
    plotNo:"",
    street:"",
    city:"",
    state:"",
    owner:"",
    pan:"",
    gstin:"",
    vat:"",
    cst:"",
    tin:"",
    tan:"",
  })

  const handleChange=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  const handleSelect=(e)=>{
    setData({...data,group:e.target.value})
  }
  const handlePumpAdd=()=>{
    (async()=>{
      if(await addPump(data)){
        setPumpModel(false)
      }
    })()
  }

  return (
    <div className="modelContainer">
      <div className="modelCard">
        <img
          src="Assets/HQ/close.png"
          className="closeModel"
          onClick={() => setPumpModel(false)}
        />
        <div className="modelTitle">
          <p>Add Pump Details</p>
        </div>
        <div className="modelInputContainer">
          <div className="modelHalf">
            <label>Pump Name</label>
            <input 
              type="text"
              name="name"
              value={data.name}
              onChange={handleChange}
            />
          </div>
          <div className="modelHalf">
            <label>PLot No.</label>
            <input 
              type="text"
              name="plotNo"
              value={data.plotNo}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="modelInputContainer">
          <div className="modelHalf">
            <label>Street</label>
            <input 
              type="text"
              name="street"
              value={data.street}
              onChange={handleChange}
            />
          </div>
          <div className="modelHalf">
          <label>City</label>
            <input 
              type="text"
              name="city"
              value={data.city}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="modelInputContainer">
          <div className="modelHalf">
            <label>State</label>
            <input 
              type="text"
              name="state"
              value={data.state}
              onChange={handleChange}
            />
          </div>
          <div className="modelHalf">
          <label>Owner</label>
            <input 
              type="text"
              name="owner"
              value={data.owner}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="modelInputContainer">
          <div className="modelHalf">
            <label>Pan</label>
            <input 
              type="text"
              name="pan"
              value={data.pan}
              onChange={handleChange}
            />
          </div>
          <div className="modelHalf">
          <label>GstIn</label>
            <input 
              type="text"
              name="gstin"
              value={data.gstin}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="modelInputContainer">
          <div className="modelHalf">
            <label>Vat</label>
            <input 
              type="text"
              name="vat"
              value={data.vat}
              onChange={handleChange}
            />
          </div>
          <div className="modelHalf">
          <label>CST</label>
            <input 
              type="text"
              name="cst"
              value={data.cst}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="modelInputContainer">
          <div className="modelHalf">
            <label>TIN</label>
            <input 
              type="text"
              name="tin"
              value={data.tin}
              onChange={handleChange}
            />
          </div>
          <div className="modelHalf">
          <label>Tan</label>
            <input 
              type="text"
              name="tan"
              value={data.tan}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="modelInputContainer">
          <button className="addModel" onClick={handlePumpAdd}> Add Pump</button>
          <button className="cancelModel" onClick={() => setPumpModel(false)}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddPumpModel;