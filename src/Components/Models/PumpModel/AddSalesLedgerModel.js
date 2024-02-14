import React, { useEffect, useState } from "react";
import "../Model.css";

const AddSalesLedgerModel = ({ setSalesLedgerModel = "" }) => {
  const [data, setData] = useState({
    pumpId: "123456",
    salesLedger: "",
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
          onClick={() => setSalesLedgerModel(false)}
        />
        <div className="modelTitle">
          <p>Add Sales Ledger</p>
        </div>
        <div className="modelInputContainer">
          <div className="modelHalf">
            <label>Sales Ledger</label>
            <input type="text" name="salesLedger" value={data.salesLedger} />
          </div>
        </div>

        <div className="modelInputContainer">
          <button className="addModel" onClick={handlePumpAdd}>
            {" "}
            Add 
          </button>
          <button
            className="cancelModel"
            onClick={() => setSalesLedgerModel(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddSalesLedgerModel;