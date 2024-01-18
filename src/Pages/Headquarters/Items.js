import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import SidebarHQ from "../../Components/Sidebar/SidebarHQ";
import Header from "../../Components/Header/Header";
import "./css/Items.css";
import ItemsHeader from "../../Components/Header/HQ/Items/ItemsHeader";

const Items = () => {
  const { ownerId } = useSelector((state) => state.user);
  const [activeItem,setActiveItem]=useState("all")
  return (
    <div className="main">
      <SidebarHQ page={"Items"} />
      <div className="page">
        <ItemsHeader activeItem={activeItem} setActiveItem={setActiveItem}/>
      </div>
    </div>
  );
};

export default Items;
