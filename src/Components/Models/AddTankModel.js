import React from "react";
import "./Model.css";

const AddtankModel = ({setTankModel}) => {
  return (
    <div className="modelContainer">
      <div className="modelCard">
        <img src="Assets/HQ/close.png" className="closeModel" onClick={()=>setTankModel(false)}/>
        <div className="modelTitle">
          <p>Add Tank Details</p>
        </div>
        <div className="modelInputContainer">
          <div className="modelHalf">
            <label>Tank Name</label>
            <input />
          </div>
          <div className="modelHalf">
            <label>Product</label>
            <input />
          </div>
        </div>
        <div className="modelInputContainer">
          <div className="modelHalf">
            <label>Quantity(in Litres)</label>
            <input />
          </div>
        </div>
        <div className="modelInputContainer">
            <button className="addModel">Add Tank</button>
            <button className="cancelModel" onClick={()=>setTankModel(false) }>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default AddtankModel;
