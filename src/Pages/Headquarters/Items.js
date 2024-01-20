import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import SidebarHQ from "../../Components/Sidebar/SidebarHQ";
import "./css/Items.css";
import "./css/Common.css";
import ItemsHeader from "../../Components/Header/HQ/Items/ItemsHeader";
import ItemUnit from "../../Components/HQ/Item/Items/ItemUnit";

const Items = () => {
  const { ownerId } = useSelector((state) => state.user);
  const [activeItem, setActiveItem] = useState("all");
  return (
    <div className="main">
      <SidebarHQ page={"Items"} />
      <div className="page">
        <ItemsHeader activeItem={activeItem} setActiveItem={setActiveItem} />
        {activeItem == "all" && <ItemUnit />}
      </div>
    </div>
  );
};

export default Items;
