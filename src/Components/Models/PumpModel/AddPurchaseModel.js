import React, { useEffect, useState } from "react";
import "../Model.css";
import { ItemData } from "../../../Data/Items";
import moment from "moment";
import { addPumpPurchase } from "../../../actions/pumpAction/purchaseAction";

const AddPurchaseModel = ({ setPurchaseModel = "" }) => {
  const [data, setData] = useState({
    pumpId: localStorage.getItem("pumpId"),
    date: moment().format("YYYY-MM-DD"),
    supplierName: "",
    purchaseLedger: "",
    itemName: "",
    qty: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleItemSelect = (e) => {
    setData({ ...data, itemName: e.target.value });
  };
  const handleLedger = (e) => {
    setData({ ...data, purchaseLedger: e.target.value });
  };
  const handlePurchaseAdd = () => {
    (async()=>{
      if(await addPumpPurchase(data)){
        setPurchaseModel(false)
      }
    })()
  };

  return (
    <div className="modelContainer">
      <div className="modelCard">
        <img
          src="Assets/HQ/close.png"
          className="closeModel"
          onClick={() => setPurchaseModel(false)}
        />
        <div className="modelTitle">
          <p>Add Purchases</p>
        </div>
        <div className="modelInputContainer">
          <div className="modelHalf">
            <label>Date</label>
            <input type="date" name="date" value={data.date} />
          </div>
          <div className="modelHalf">
            <label>Supplier</label>
            <input
              type="text"
              name="supplierName"
              value={data.supplierName}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="modelInputContainer">
          <div className="modelHalf">
            <label>Item Name</label>
            <select onChange={handleItemSelect}>
              <option>Select Item</option>
              {
                ItemData && ItemData.map((data)=>(
                   <option>{data.symbol}</option>
                ))
              }
            </select>
          </div>
          <div className="modelHalf">
            <label>Purchase Ledger</label>
            <select onChange={handleLedger}>
              <option>Select Legder</option>
              <option>Kaccha</option>
              <option>Pakka</option>
            </select>
          </div>
        </div>
        <div className="modelInputContainer">
          <div className="modelHalf">
            <label>Quantity</label>
            <input type="text" name="qty" value={data.qty} onChange={handleChange} />
          </div>
        </div>

        <div className="modelInputContainer">
          <button className="addModel" onClick={handlePurchaseAdd}>
            {" "}
            Add
          </button>
          <button
            className="cancelModel"
            onClick={() => setPurchaseModel(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddPurchaseModel;
