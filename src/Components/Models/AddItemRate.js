import React,{useState} from "react";
import "./Model.css";
import { ItemData } from "../../Data/Items";
import moment from "moment"
import { addItemRate } from "../../actions/setupActions";

const AddItemRateModel = ({ setItemRateModel,ownerId,pumpId }) => {
  const defaultProduct = ItemData.find((e) => e.type === "Fuel");
  const [data,setData]=useState({
    ownerId,
    pumpId,
    product:"",
    date:moment().format("YYYY-MM-DD"),
    rate:"",
  })

  const handleChange=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  const handleSelect=(e)=>{
    setData({...data,product:e.target.value})
  }
  const addItemRateCode=()=>{
    (async()=>{
       if(await addItemRate(data)){
        setItemRateModel(false)
       }
    })()
  }
  return (
    <div className="modelContainer">
      <div className="modelCard">
        <img
          src="Assets/HQ/close.png"
          className="closeModel"
          onClick={() => setItemRateModel(false)}
        />
        <div className="modelTitle">
          <p>Add Item Rate</p>
        </div>
        <div className="modelInputContainer">
          <div className="modelHalf">
          <label>Product</label>
            <select onChange={handleSelect}>
              {ItemData.map((d) => (
                <option key={d.symbol} value={d.symbol}>{d.symbol}</option>
              ))}
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
            <label>Rate</label>
            <input 
              type="text"
              name="rate"
              value={data.rate}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="modelInputContainer">
          <button className="addModel" onClick={addItemRateCode}> Add Rate </button>
          <button className="cancelModel" onClick={() => setItemRateModel(false)}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddItemRateModel;