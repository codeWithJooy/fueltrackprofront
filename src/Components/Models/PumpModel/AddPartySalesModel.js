import React, { useEffect, useState } from "react";
import "../Model.css";
import { ItemData } from "../../../Data/Items";
import {
  addPartySales,
  getPartyName,
  getPartyVehicle,
} from "../../../actions/pumpAction/partyAction";
import moment from "moment";
import { getItem,getOneItemRate } from "../../../actions/setupActions";

const AddPartySalesModel = ({ setPartySalesModel = "", ownerId = "" }) => {
  const [partyData, setPartyData] = useState([]);
  const [vehicle, setVehicle] = useState([]);
  const [items,setItems]=useState([])

  const [data, setData] = useState({
    pumpId: localStorage.getItem("pumpId"),
    partyId: localStorage.getItem("pumpId"),
    partyName: "",
    date: moment().format("YYYY-MM-DD"),
    vehicle: "",
    salesLedger: "",
    item: "",
    qty: "",
    rate: "",
    amount: "",
    delivery: "",
    tcs: "",
    roundoff: "",
  });
  const handleParty = (e) => {
    setData({ ...data, partyName: e.target.value });
  };
  const handlePartyVehicle = (e) => {
    setData({ ...data, vehicle: e.target.value });
  };
  const handleSymbol = (e) => {
    (async()=>{
      let rat=await getOneItemRate({pumpId:data.pumpId,product:e.target.value})
      setData({...data,item: e.target.value,rate:rat ? rat.rate:0})
    })()
    
  };
  const handleLedger = (e) => {
    setData({ ...data, salesLedger: e.target.value });
  };
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleChangeQuantity = (e) => {
    let rate=parseFloat(data.rate)
    let quantity=parseFloat(e.target.value)
    let amount=rate*quantity
    setData({ ...data, qty: e.target.value,amount:amount });
  };
  const handleDate=(e)=>{
    setData({...data,date:moment().format(e.target.value)})
  }
  useEffect(() => {
    (async () => {
      let party = await getPartyName(data.pumpId);
      setPartyData(party);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      let vehicleData = await getPartyVehicle({
        pumpId: data.pumpId,
        partyName: data.partyName,
      });
      setVehicle(vehicleData);
    })();
  }, [data.partyName]);

  useEffect(()=>{
    (async()=>{
      let dat=await getItem({pumpId:data.pumpId})
      setItems(dat)
    })()
  },[data.item,data.pumpId])

  const handleSelect = (e) => {
    setData({ ...data, group: e.target.value });
  };
  const handlePartySale = () => {
    (async()=>{
      if(await addPartySales(data)){
        setPartySalesModel(false)
      }
    })()
  };

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
            <select onChange={handleParty}>
              <option>Select Party</option>
              {partyData &&
                partyData.map((data) => (
                  <option value={data.partyName}>{data.partyName}</option>
                ))}
            </select>
          </div>
          <div className="modelHalf">
            <label>Date</label>
            <input type="date" name="date" value={data.date} onChange={handleDate}/>
          </div>
        </div>
        <div className="modelInputContainer">
          <div className="modelHalf">
            <label>Vehicle</label>
            <select onClick={handlePartyVehicle}>
              <option>Select Vehicle</option>
              {vehicle &&
                vehicle.map((data) => (
                  <option value={data.vehicleNo}>{data.vehicleNo}</option>
                ))}
            </select>
          </div>
          <div className="modelHalf">
            <label>Sales Ledger</label>
            <select onChange={handleLedger}>
              <option>Select Ledger</option>
              <option>Kaccha</option>
              <option>Pakka</option>
            </select>
          </div>
        </div>
        <div className="modelInputContainer">
          <div className="modelHalf">
            <label>Item</label>
            <select onChange={handleSymbol}>
              <option>Select Item</option>
              {items.map((data) => (
                <option>{data.symbol}</option>
              ))}
            </select>
          </div>
          <div className="modelHalf">
            <label>Quantity</label>
            <input type="text" name="qty" value={data.qty} onChange={handleChangeQuantity}/>
          </div>
        </div>
        <div className="modelInputContainer">
          <div className="modelHalf">
            <label>Rate</label>
            <input type="text" name="rate" value={data.rate} onChange={handleChange}/>
          </div>
          <div className="modelHalf">
            <label>Amount</label>
            <input type="text" name="amount" value={data.amount} onChange={handleChange}/>
          </div>
        </div>
        <div className="modelInputContainer">
          <button className="addModel" onClick={handlePartySale}>
            {" "}
            Add Sale
          </button>
          <button
            className="cancelModel"
            onClick={() => setPartySalesModel(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddPartySalesModel;
