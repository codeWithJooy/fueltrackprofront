import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import Dropdown from "../../../Dropdown/Dropdown";
import AddtankModel from "../../../Models/AddTankModel";
import NotPresent from "../../../NotPresent/NotPresent";
import { getTanks } from "../../../../actions/stockAction";
import AddItemRateModel from "../../../Models/AddItemRate";

let tanks=[
  {
  product:"MS",
  date:"2024-02-18",
  rate:"Rs 103"
 },
 {
  product:"HSD",
  date:"2024-02-18",
  rate:"Rs 93"
 },
 {
  product:"Break Fluid",
  date:"2024-02-18",
  rate:"Rs 80"
 },
]
const Previous = () => {
  const ownerId=localStorage.getItem("ownerId")
  const [pumpId, setPumpId] = useState("");
  const [tankModel, setTankModel] = useState(false);
  const [itemRateModel,setItemRateModel]=useState(false)
 
  const openModel = () => {
    setItemRateModel(true);
  };
  
  return (
    <div className="pageSection">
      <Dropdown pumpId={pumpId} setPumpId={setPumpId} />
      <input type="date" />
      <img src="Assets/HQ/add.png" className="addStock" onClick={openModel} />
      
      { 
        <table>
        <thead style={{ background: "#19363C", color: "white" }}>
          <tr>
            <th>Product Name</th>
            <th>Date</th>
            <th>Rate</th>
          </tr>
        </thead>
        <tbody>
          {tanks.map((tank) => (
            <tr key={tank._id}>
              <td>{tank.product}</td>
              <td>{tank.date}</td>
              <td>{tank.rate}</td>
            </tr>
          ))}
        </tbody>
      </table>
      }
    </div>
  );
};

export default Previous;