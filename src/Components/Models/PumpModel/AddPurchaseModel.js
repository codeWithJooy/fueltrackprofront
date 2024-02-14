import React, { useEffect, useState } from "react";
import "../Model.css";
import moment from "moment";

const AddPurchaseModel = ({ setPurchaseModel = "" }) => {
  const [data, setData] = useState({
    pumpId: localStorage.getItem("pumpId"),
    date: moment().format("YYYY-MM-DD"),
    supplierName: "",
    supplierInvoice: "Not Present",
    invoiceDate:  moment().format("YYYY-MM-DD"),
    purchaseLedger: "",
    itemName: "",
    qty: "",
    rate: "Not Present",
    amount: "Not Present",
    deliveryCharge:"Not Present",
    tcs:"Not Present",
    extra:"Not Present",
    roundoff: "Not Present",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSelect = (e) => {
    setData({ ...data, group: e.target.value });
  };
  const handlePurchaseAdd = () => {
    console.log(data)
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
            <select>
              <option>Item 1</option>
              <option>Item 2</option>
            </select>
          </div>
          <div className="modelHalf">
            <label>Purchase Ledger</label>
            <select>
              <option>Item 1</option>
              <option>Item 2</option>
            </select>
          </div>
        </div>
        <div className="modelInputContainer">
          <div className="modelHalf">
            <label>Quantity</label>
            <input type="text" name="details" value={data.details} />
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
