import React, { useState, useEffect } from "react";
import SidebarHQ from "../../Components/Sidebar/SidebarHQ";
import "./css/Items.css";
import "./css/Common.css";
import StocksHeader from "../../Components/Header/HQ/Stocks/StocksHeader";
import Tanks from "../../Components/HQ/Stock/Tanks/Tanks";
import Nozels from "../../Components/HQ/Stock/Nozels/Nozels";
const Stock = () => {
  const [activeItem,setActiveItem]=useState("Tanks")
  return (
    <div className="main">
      <SidebarHQ page={"Stock"} />
      <div className="page">
        <StocksHeader activeItem={activeItem} setActiveItem={setActiveItem}/>
        {
          activeItem=="Tanks" &&
          <Tanks />
        }
                {
          activeItem=="Nozels" &&
          <Nozels/>
        }
    </div>
    </div>
  );
};

export default Stock;