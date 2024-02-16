import React, { useEffect, useState } from "react";
import "../Model.css";
import { addExpenditureType } from "../../../actions/pumpAction/expenditureAction";

const AddExpenditureType = ({ setExpenditureType = "" }) => {
  const [data, setData] = useState({
    pumpId: localStorage.getItem("pumpId"),
    expenditureType: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handlePumpAdd = () => {
    (async()=>{
      if(await addExpenditureType(data)){
       setExpenditureType(false) 
      }
    })()
  }

  return (
    <div className="modelContainer">
      <div className="modelCard">
        <img
          src="Assets/HQ/close.png"
          className="closeModel"
          onClick={() => setExpenditureType(false)}
        />
        <div className="modelTitle">
          <p>Add Expenditure Type</p>
        </div>
        <div className="modelInputContainer">
          <div className="modelHalf">
            <label>Expense Type</label>
            <input type="text" name="expenditureType" value={data.expenditureType} onChange={handleChange}/>
          </div>
        </div>

        <div className="modelInputContainer">
          <button className="addModel" onClick={handlePumpAdd}>
            {" "}
            Add 
          </button>
          <button
            className="cancelModel"
            onClick={() => setExpenditureType(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddExpenditureType;