import React,{useEffect, useState} from "react";
import "../Model.css";

const AddPartySalesModel = ({ setPartySalesModel="",ownerId=""}) => {

  const [data,setData]=useState({
    pumpId:"123456",
    partyId:"",
    date:"",
    vehicle:"",
    salesLedger:"",
    item:"",
    qty:"",
    rate:"",
    amount:"",
    delivery:"",
    tcs:"",
    roundoff:"",
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
          onClick={() => setPartySalesModel(false)}
        />
        <div className="modelTitle">
          <p>Add Party Sales</p>
        </div>
        <div className="modelInputContainer">
          <div className="modelHalf">
            <label>Party Name</label>
            <select>
                <option>Party1</option>
                <option>Party 2</option>
            </select>
          </div>
          <div className="modelHalf">
            <label>Date</label>
            <input 
              type="date"
              name="date"
              value={data.date}
            />
          </div>
        </div>
        <div className="modelInputContainer">
          <div className="modelHalf">
            <label>Vehicle</label>
            <select>
                <option>Vehicle 1</option>
                <option>Vehicle 2</option>
            </select>
          </div>
          <div className="modelHalf">
          <label>Sales Ledger</label>
          <select>
                <option>Vehicle 1</option>
                <option>Vehicle 2</option>
            </select>
          </div>
        </div>
        <div className="modelInputContainer">
          <div className="modelHalf">
            <label>Item</label>
            <select>
                <option>Item 1</option>
                <option>item 2</option>
            </select>
          </div>
          <div className="modelHalf">
          <label>Quantity</label>
            <input 
              type="text"
              name="qty"
              value={data.qty}
            />
          </div>
        </div>
        <div className="modelInputContainer">
          <div className="modelHalf">
            <label>Rate</label>
            <input 
              type="text"
              name="rate"
              value={data.rate}
            />
          </div>
          <div className="modelHalf">
          <label>Amount</label>
            <input 
              type="text"
              name="amount"
              value={data.amount}
            />
          </div>
        </div>
        <div className="modelInputContainer">
          <button className="addModel" onClick={handlePumpAdd}> Add Sale</button>
          <button className="cancelModel" onClick={() => setPartySalesModel(false)}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddPartySalesModel;