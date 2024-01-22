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
  const [showSidebar, setShowSidebar] = useState(true);
  useEffect(() => {
    const handleResize = () => {
      setShowSidebar(window.innerWidth > 768); // Adjust the threshold as needed
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="main">
      {
        showSidebar && <SidebarHQ page={"Items"} setShowSidebar={setShowSidebar}/>
      }
      <div className="page">
        <ItemsHeader activeItem={activeItem} setActiveItem={setActiveItem} setShowSidebar={setShowSidebar}/>
        {activeItem == "all" && <ItemUnit />}
      </div>
    </div>
  );
};

export default Items;
