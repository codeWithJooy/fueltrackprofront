import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import SidebarHQ from "../../Components/Sidebar/SidebarHQ";
import Dropdown from "../../Components/Dropdown/Dropdown"

import "./css/Items.css";
import "./css/Common.css";
import StocksHeader from "../../Components/Header/HQ/Stocks/StocksHeader";
const Stock = () => {
  const { ownerId } = useSelector((state) => state.user);
  const [activeItem,setActiveItem]=useState("Tanks")

  return (
    <div className="main">
      <SidebarHQ page={"Stock"} />
      <div className="page">
        <StocksHeader activeItem={activeItem} setActiveItem={setActiveItem}/>
        <div className="pageSection">
          <Dropdown />
        </div>
      </div>
    </div>
  );
};

export default Stock;