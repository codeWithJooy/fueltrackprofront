import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import "./Tanks.css";
import Dropdown from "../../../Dropdown/Dropdown";
import AddtankModel from "../../../Models/AddTankModel";
import NotPresent from "../../../NotPresent/NotPresent";

const Tanks = () => {
  const { ownerId } = useSelector((state) => state.user);
  const [tankModel,setTankModel]=useState(false)

  const openModel=()=>{
    setTankModel(true)
  }
  const partyData = [
    {
      product: "MS",
      quantity: "2345",
      rate: "98.04",
      amount: "229,903",
    },
    {
        product: "HSD",
        quantity: "6299",
        rate: "90.35",
        amount: "569114",
      },
      {
        product: "Lube",
        quantity: "1",
        rate: "300",
        amount: "300",
      },
  ];
  return (
    <div className="pageSection">
      <Dropdown />
      <img src="Assets/HQ/add.png" className="addStock" onClick={openModel} />
      <NotPresent />
      {
        tankModel && <AddtankModel setTankModel={setTankModel} />
      }
    </div>
  );
};

export default Tanks;
