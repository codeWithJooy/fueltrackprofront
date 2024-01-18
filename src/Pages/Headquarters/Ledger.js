import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import SidebarHQ from "../../Components/Sidebar/SidebarHQ";
import Header from "../../Components/Header/Header";
import "./css/Items.css";
import LedgerHeader from "../../Components/Header/HQ/Ledger/LedgerHeader";

const Ledger = () => {
  const { ownerId } = useSelector((state) => state.user);
  const [activeItem,setActiveItem]=useState("all")
  return (
    <div className="main">
      <SidebarHQ page={"Ledger"} />
      <div className="page">
        <LedgerHeader activeItem={activeItem} setActiveItem={setActiveItem}/>
      </div>
    </div>
  );
};

export default Ledger;