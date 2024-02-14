import React, { useEffect, useState } from "react";
import "../Model.css";

const AddExpenditureType = ({ setExpenditureType = "" }) => {
  const [data, setData] = useState({
    pumpId: "123456",
    expenditureType: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSelect = (e) => {
    setData({ ...data, group: e.target.value });
  };
  const handlePumpAdd = () => {
    (async () => {})();
  };

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
            <input type="text" name="expenditureType" value={data.expenditureType} />
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