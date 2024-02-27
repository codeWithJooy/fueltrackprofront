import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import Dropdown from "../../../Dropdown/Dropdown";
import NotPresent from "../../../NotPresent/NotPresent";
import AddItemRateModel from "../../../Models/AddItemRate";
import { getItemRate } from "../../../../actions/setupActions";
import moment from "moment"

const Today = () => {
  const ownerId=localStorage.getItem("ownerId")
  const [pumpId, setPumpId] = useState("");
  const [tankModel, setTankModel] = useState(false);
  const [itemRateModel,setItemRateModel]=useState(false)
  const [tanks, setTanks] = useState([]);
  const [searchData,setSearchData]=useState({
    pumpId:pumpId,
    date:moment().format("YYYY-MM-DD")
  })
  const openModel = () => {
    setItemRateModel(true);
  };
   useEffect(()=>{
    (async()=>{
      let item=await getItemRate({pumpId:pumpId,date:moment().format("YYYY-MM-DD")})
      setTanks(item)
    })()
   },[itemRateModel,pumpId])
  return (
    <div className="pageSection">
      <Dropdown pumpId={pumpId} setPumpId={setPumpId} />
      <img src="Assets/HQ/add.png" className="addStock" onClick={openModel} />
      {
        tanks.length <1 && <NotPresent text="No Product Rate Added Today"/>
      }
      {
        tanks && tanks.length >=1 && 
        <table>
        <thead style={{ background: "#19363C", color: "white" }}>
          <tr>
            <th>Product</th>
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
     {
      itemRateModel && 
      <AddItemRateModel setItemRateModel={setItemRateModel} ownerId={ownerId} pumpId={pumpId} />
     }
    </div>
  );
};

export default Today;