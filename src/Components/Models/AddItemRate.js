import React,{useEffect, useState} from "react";
import "./Model.css";
import { ItemData } from "../../Data/Items";
import moment from "moment"
import { addItemRate } from "../../actions/setupActions";
import { getItem } from "../../actions/setupActions";
const AddItemRateModel = ({ setItemRateModel,ownerId,pumpId }) => {
  const defaultProduct = ItemData.find((e) => e.type === "Fuel");
  const [items,setItems]=useState([])

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
  const handleDateChange=(e)=>{
    setData({...data,date:moment().format(e.target.value)})
  }
  const addItemRateCode=()=>{
    (async()=>{
       if(await addItemRate(data)){
        setItemRateModel(false)
       }
    })()
  }

  useEffect(()=>{
    (async()=>{
      let dat=await getItem({pumpId})
      setItems(dat)
    })()
  },[data.product,pumpId])

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
              <option>Select Product</option>
              {items.filter(e=>e.type=="Fuel").map((d) => (
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
              onChange={handleDateChange}
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