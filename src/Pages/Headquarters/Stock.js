import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import SidebarHQ from "../../Components/Sidebar/SidebarHQ";
import Header from "../../Components/Header/Header";
import "./css/Items.css";
import LedgerHeader from "../../Components/Header/HQ/Ledger/LedgerHeader";
import StocksHeader from "../../Components/Header/HQ/Stocks/StocksHeader";

const Stock = () => {
  const { ownerId } = useSelector((state) => state.user);
  const [activeItem,setActiveItem]=useState("Tanks")
  return (
    <div className="main">
      <SidebarHQ page={"Stock"} />
      <div className="page">
        <StocksHeader activeItem={activeItem} setActiveItem={setActiveItem}/>
      </div>
    </div>
  );
};

export default Stock;