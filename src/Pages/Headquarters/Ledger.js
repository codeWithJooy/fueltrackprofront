import React, { useState, useEffect } from "react";
import SidebarHQ from "../../Components/Sidebar/SidebarHQ";
import "./css/Items.css";
import "./css/Common.css";
import LedgerHeader from "../../Components/Header/HQ/Ledger/LedgerHeader";
import LedgerUnit from "../../Components/HQ/Ledger/LedgerUnit";

const Ledger = () => {
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
      {showSidebar && (
        <SidebarHQ page={"Ledger"} setShowSidebar={setShowSidebar} />
      )}
      <div className="page">
        <LedgerHeader activeItem={activeItem} setActiveItem={setActiveItem} setShowSidebar={setShowSidebar}/>
        {activeItem == "all" && <LedgerUnit />}
      </div>
    </div>
  );
};

export default Ledger;
