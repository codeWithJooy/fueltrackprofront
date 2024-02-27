import React,{useEffect, useState} from "react";
import "./Model.css";
import { ItemData } from "../../Data/Items";
import { addNozel, getTankByProduct } from "../../actions/stockAction";
import { getItem } from "../../actions/setupActions";

const AddNozelModel = ({ setNozelModel,ownerId,pumpId }) => {
  const defaultProduct = ItemData.find((e) => e.type === "Fuel");
  const [tanks,setTanks]=useState([])
  const [data,setData]=useState({
    ownerId,
    pumpId,
    nozelName:"",
    product: "",
    mpd:"",
    tank:"",
    closingReading:"",
  })
  const [items,setItems]=useState([])
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
              <option>Select Product</option>
              {items.filter(e=>e.type=="Fuel").map((d) => (
                <option key={d.symbol} value={d.symbol}>{d.symbol}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="modelInputContainer">
          <div className="modelHalf">
            <label>MPD</label>
            <input 
              type="text"
              name="mpd"
              value={data.mpd}
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
          <div className="modelHalf">
            <label>Closing Reading</label>
            <input 
              type="text"
              name="closingReading"
              value={data.closingReading}
              onChange={handleChange}
            />
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