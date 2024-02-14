import React, { useEffect, useState } from "react";
import "../Model.css";

const AddExpenditureModel = ({ setExpenditureModel = "" }) => {
  const [data, setData] = useState({
    pumpId: "123456",
    date: "",
    expenditureType: "",
    details: "",
    amount: "",
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
          onClick={() => setExpenditureModel(false)}
        />
        <div className="modelTitle">
          <p>Add Expenditure</p>
        </div>
        <div className="modelInputContainer">
          <div className="modelHalf">
            <label>Date</label>
            <input type="date" name="date" value={data.date} />
          </div>
          <div className="modelHalf">
            <label>Expenditure Type</label>
            <select>
              <option>Travel</option>
              <option>Generator</option>
            </select>
          </div>
        </div>
        <div className="modelInputContainer">
          <div className="modelHalf">
            <label>Details</label>
            <input type="text" name="details" value={data.details} />
          </div>
          <div className="modelHalf">
            <label>Amount</label>
            <input type="text" name="amount" value={data.amount} />
          </div>
        </div>

        <div className="modelInputContainer">
          <button className="addModel" onClick={handlePumpAdd}>
            {" "}
            Add 
          </button>
          <button
            className="cancelModel"
            onClick={() => setExpenditureModel(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddExpenditureModel;
