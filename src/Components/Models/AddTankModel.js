import React,{useState} from "react";
import { addTank } from "../../actions/stockAction";
import "./Model.css";
import { ItemData } from "../../Data/Items";

const AddtankModel = ({ setTankModel,ownerId,pumpId }) => {
  const defaultProduct = ItemData.find((e) => e.type === "Fuel");
  const [data,setData]=useState({
    ownerId,
    pumpId,
    tankName:"",
    product: defaultProduct ? defaultProduct.symbol : "",
    quantity:"",
  })

  const handleChange=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  const handleSelect=(e)=>{
    setData({...data,product:e.target.value})
  }
  const addNewTank=()=>{
    (async()=>{
      if(await addTank(data)){
        setTankModel(false)
      }
    })()
  }
  return (
    <div className="modelContainer">
      <div className="modelCard">
        <img
          src="Assets/HQ/close.png"
          className="closeModel"
          onClick={() => setTankModel(false)}
        />
        <div className="modelTitle">
          <p>Add Tank Details</p>
        </div>
        <div className="modelInputContainer">
          <div className="modelHalf">
            <label>Tank Name</label>
            <input 
              type="text"
              name="tankName"
              value={data.tankName}
              onChange={handleChange}
            />
          </div>
          <div className="modelHalf">
            <label>Product</label>
            <select onChange={handleSelect}>
              {ItemData.filter((e) => e.type == "Fuel").map((d) => (
                <option key={d.symbol} value={d.symbol}>{d.symbol}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="modelInputContainer">
          <div className="modelHalf">
            <label>Quantity(in Litres)</label>
            <input 
              type="text"
              name="quantity"
              value={data.quantity}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="modelInputContainer">
          <button className="addModel" onClick={addNewTank}> Add Tank</button>
          <button className="cancelModel" onClick={() => setTankModel(false)}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddtankModel;
