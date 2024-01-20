import React,{useEffect, useState} from "react";
import "./Model.css";
import { ItemData } from "../../Data/Items";
import { addNozel, getTankByProduct } from "../../actions/stockAction";

const AddNozelModel = ({ setNozelModel,ownerId,pumpId }) => {
  const defaultProduct = ItemData.find((e) => e.type === "Fuel");
  const [tanks,setTanks]=useState([])
  const [data,setData]=useState({
    ownerId,
    pumpId,
    nozelName:"",
    product: defaultProduct ? defaultProduct.symbol : "",
    npd:"",
    tank:"",
  })

  const handleChange=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  const handleSelect=(e)=>{
    setData({...data,product:e.target.value})
  }
  const handleSelectTank=(e)=>{
    setData({...data,tank:e.target.value})
  }
  const handleNozelAdd=()=>{
    (async()=>{
      if(await addNozel(data)){
        setNozelModel(false)
      }
    })()
  }
  useEffect(()=>{
    (async()=>{
      let tankValues=await getTankByProduct(ownerId,pumpId,data.product)
      setTanks(tankValues)
      setData({...data,tank:tankValues[0].tankName})

    })()
  },[data.product])

  return (
    <div className="modelContainer">
      <div className="modelCard">
        <img
          src="Assets/HQ/close.png"
          className="closeModel"
          onClick={() => setNozelModel(false)}
        />
        <div className="modelTitle">
          <p>Add Nozel Details</p>
        </div>
        <div className="modelInputContainer">
          <div className="modelHalf">
            <label>Nozel Name</label>
            <input 
              type="text"
              name="nozelName"
              value={data.nozelName}
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
            <label>NPD</label>
            <input 
              type="text"
              name="npd"
              value={data.npd}
              onChange={handleChange}
            />
          </div>
          <div className="modelHalf">
            <label>Tank</label>
            <select onChange={handleSelectTank}>
              {tanks.map((d) => (
                <option key={d._id} value={d.tankName}>{d.tankName}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="modelInputContainer">
          <button className="addModel" onClick={handleNozelAdd}> Add Nozel</button>
          <button className="cancelModel" onClick={() => setNozelModel(false)}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddNozelModel;