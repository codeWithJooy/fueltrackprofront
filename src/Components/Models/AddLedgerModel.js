import React,{useEffect, useState} from "react";
import "./Model.css";
import { ItemData } from "../../Data/Items";
import { addLedger } from "../../actions/ledgerAction";

const AddLedgerModel = ({ setLedgerModel,ownerId,pumpId }) => {
  const defaultProduct = ItemData.find((e) => e.type === "Fuel");
  const [ledger,setLedger]=useState([])
  const [data,setData]=useState({
    ownerId,
    pumpId,
    partyName:"",
    group:"Soundry Debtors",
    house:"",
    street:"",
    pincode:"",
    city:"",
    state:"",
    pan:"",
    gst:"",
    mobile:"",
    email:"",
    openingBalance:"",
  })

  const handleChange=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  const handleSelect=(e)=>{
    setData({...data,group:e.target.value})
  }
  const handleLedgerAdd=()=>{
    (async()=>{
      if(await addLedger(data)){
        setLedgerModel(false)
      }
    })()
  }

  return (
    <div className="modelContainer">
      <div className="modelCard">
        <img
          src="Assets/HQ/close.png"
          className="closeModel"
          onClick={() => setLedgerModel(false)}
        />
        <div className="modelTitle">
          <p>Add Ledger Details</p>
        </div>
        <div className="modelInputContainer">
          <div className="modelHalf">
            <label>Party Name</label>
            <input 
              type="text"
              name="partyName"
              value={data.partyName}
              onChange={handleChange}
            />
          </div>
          <div className="modelHalf">
            <label>Group</label>
            <select onChange={handleSelect}>
              <option value="Sundry Debtors">Sundry Debtors</option>
              <option value="Sundry Creditors">Sundry Creditors</option>
            </select>
          </div>
        </div>
        <div className="modelInputContainer">
          <div className="modelHalf">
            <label>House</label>
            <input 
              type="text"
              name="house"
              value={data.house}
              onChange={handleChange}
            />
          </div>
          <div className="modelHalf">
          <label>Street</label>
            <input 
              type="text"
              name="street"
              value={data.street}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="modelInputContainer">
          <div className="modelHalf">
            <label>Pincode</label>
            <input 
              type="text"
              name="pincode"
              value={data.pincode}
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
          <label>Pan</label>
            <input 
              type="text"
              name="pan"
              value={data.pan}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="modelInputContainer">
          <div className="modelHalf">
            <label>GST</label>
            <input 
              type="text"
              name="gst"
              value={data.gst}
              onChange={handleChange}
            />
          </div>
          <div className="modelHalf">
          <label>Mobile</label>
            <input 
              type="text"
              name="mobile"
              value={data.mobile}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="modelInputContainer">
          <div className="modelHalf">
            <label>Email</label>
            <input 
              type="text"
              name="email"
              value={data.email}
              onChange={handleChange}
            />
          </div>
          <div className="modelHalf">
          <label>Opening Balance</label>
            <input 
              type="text"
              name="openingBalance"
              value={data.openingBalance}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="modelInputContainer">
          <button className="addModel" onClick={handleLedgerAdd}> Add Ledger</button>
          <button className="cancelModel" onClick={() => setLedgerModel(false)}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddLedgerModel;