import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import Dropdown from "../../../Dropdown/Dropdown";
import AddNewItemModel from "../../../Models/AddNewItemModel";
import NotPresent from "../../../NotPresent/NotPresent";
import { getTanks } from "../../../../actions/stockAction";

const NewItem = () => {
  const ownerId=localStorage.getItem("ownerId")
  const [pumpId, setPumpId] = useState("");
  const [itemModel, setItemModel] = useState(false);
  const [tanks, setTanks] = useState([]);
  const openModel = () => {
    setItemModel(true);
  };
 
  return (
    <div className="pageSection">
      <Dropdown pumpId={pumpId} setPumpId={setPumpId} />
      <img src="Assets/HQ/add.png" className="addStock" onClick={openModel} />
      
        <NotPresent text={"No New Item"}/>

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