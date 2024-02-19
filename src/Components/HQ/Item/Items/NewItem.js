import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import Dropdown from "../../../Dropdown/Dropdown";
import AddNewItemModel from "../../../Models/AddNewItemModel";
import NotPresent from "../../../NotPresent/NotPresent";
import { getTanks } from "../../../../actions/stockAction";
import { getItem } from "../../../../actions/setupActions";

const NewItem = () => {
  const ownerId=localStorage.getItem("ownerId")
  const [pumpId, setPumpId] = useState("");
  const [itemModel, setItemModel] = useState(false);
  const [tanks, setTanks] = useState([]);
  const openModel = () => {
    setItemModel(true);
  };
  useEffect(()=>{
    (async()=>{
      let item=await getItem({pumpId:pumpId})
      setTanks(item)
    })()
   },[itemModel,pumpId])
  return (
    <div className="pageSection">
      <Dropdown pumpId={pumpId} setPumpId={setPumpId} />
      <img src="Assets/HQ/add.png" className="addStock" onClick={openModel} />
      
      {
        tanks.length <1 && <NotPresent text="No Item Added"/>
      }
       {
        tanks && tanks.length >=1 && 
        <table>
        <thead style={{ background: "#19363C", color: "white" }}>
          <tr>
            <th>Symbol</th>
            <th>Product Name</th>
            <th>Unit</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {tanks.map((party) => (
            <tr key={party.symbol}>
              <td>{party.symbol}</td>
              <td>{party.productName}</td>
              <td>{party.unit}</td>
              <td>{party.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
      }
      {itemModel && (
        <AddNewItemModel
          setItemModel={setItemModel}
          ownerId={ownerId}
          pumpId={pumpId}
        />
      )}
    </div>
  );
};

export default NewItem;