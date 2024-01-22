import React,{useState} from "react";
import { addNoFuel } from "../../actions/stockAction";
import "./Model.css";
import { ItemData } from "../../Data/Items";

const AddNoFuelModel = ({ setNoFuelModel,ownerId,pumpId }) => {
  const defaultProduct = ItemData.find((e) => e.type !== "Fuel");
  const [data,setData]=useState({
    ownerId,
    pumpId,
    productName: defaultProduct ? defaultProduct.symbol : "",
    size:"",
    quantity:"",
  })

  const handleChange=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  const handleSelect=(e)=>{
    setData({...data,productName:e.target.value})
  }
  const addNoFuelData=()=>{
    (async()=>{
      if(await addNoFuel(data)){
        setNoFuelModel(false)
      }
    })()
  }
  return (
    <div className="modelContainer">
      <div className="modelCard">
        <img
          src="Assets/HQ/close.png"
          className="closeModel"
          onClick={() => setNoFuelModel(false)}
        />
        <div className="modelTitle">
          <p>Add Non Fuel Details</p>
        </div>
        <div className="modelInputContainer">
        <div className="modelHalf">
            <label>Product Name</label>
            <select onChange={handleSelect}>
              {ItemData.filter((e) => e.type !== "Fuel").map((d) => (
                <option key={d.symbol} value={d.symbol}>{d.symbol}</option>
              ))}
            </select>
          </div>
          <div className="modelHalf">
            <label>Size</label>
            <input 
              type="text"
              name="size"
              value={data.size}
              onChange={handleChange}
            />
          </div>
 
        </div>
        <div className="modelInputContainer">
          <div className="modelHalf">
            <label>Quantity(in Nos.)</label>
            <input 
              type="text"
              name="quantity"
              value={data.quantity}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="modelInputContainer">
          <button className="addModel" onClick={addNoFuelData}> Add</button>
          <button className="cancelModel" onClick={() => setNoFuelModel(false)}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddNoFuelModel;