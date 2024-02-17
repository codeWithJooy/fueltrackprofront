import React, { useState } from "react";
import "./Model.css";
import { ItemData } from "../../Data/Items";
import { addItem } from "../../actions/setupActions"
const AddNewItemModel = ({ setItemModel, ownerId, pumpId }) => {
  const [data, setData] = useState({
    ownerId,
    pumpId,
    productName: "",
    symbol: "",
    unit: "",
    type: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSelect = (e) => {
    setData({ ...data, type: e.target.value });
  };
  const addNewItem = () => {
    (async()=>{
      if(await addItem(data)){
        setItemModel(false)
      }
    })()
  };
  return (
    <div className="modelContainer">
      <div className="modelCard">
        <img
          src="Assets/HQ/close.png"
          className="closeModel"
          onClick={() => setItemModel(false)}
        />
        <div className="modelTitle">
          <p>Add New Item</p>
        </div>
        <div className="modelInputContainer">
          <div className="modelHalf">
            <label>Product Name</label>
            <input
              type="text"
              name="productName"
              value={data.productName}
              onChange={handleChange}
            />
          </div>
          <div className="modelHalf">
            <label>Symbol</label>
            <input
              type="text"
              name="symbol"
              value={data.symbol}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="modelInputContainer">
          <div className="modelHalf">
            <label>Unit</label>
            <input
              type="text"
              name="unit"
              value={data.unit}
              onChange={handleChange}
            />
          </div>
          <div className="modelHalf">
            <label>Type</label>
            <select onChange={handleSelect}>
              <option value="">Select Type</option>
              <option>Fuel</option>
              <option>Lube</option>
            </select>
          </div>
        </div>
        <div className="modelInputContainer">
          <button className="addModel" onClick={addNewItem}>
            {" "}
            Add Item
          </button>
          <button className="cancelModel" onClick={() => setItemModel(false)}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddNewItemModel;
