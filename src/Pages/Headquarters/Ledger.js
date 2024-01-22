import React, { useState, useEffect } from "react";
import SidebarHQ from "../../Components/Sidebar/SidebarHQ";
import "./css/Items.css";
import "./css/Common.css";
import LedgerHeader from "../../Components/Header/HQ/Ledger/LedgerHeader";
import LedgerUnit from "../../Components/HQ/Ledger/LedgerUnit";

const Ledger = () => {
  const [activeItem,setActiveItem]=useState("all")
  return (
    <div className="main">
      <SidebarHQ page={"Ledger"} />
      <div className="page">
        <LedgerHeader activeItem={activeItem} setActiveItem={setActiveItem}/>
        {
        activeItem=="all"
        && <LedgerUnit/>
      }
      </div>
    </div>
  );
};

export default Ledger;