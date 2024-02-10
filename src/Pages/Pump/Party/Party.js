import React, { useState, useEffect } from "react";
import SidebarPump from "../../../Components/Sidebar/SidebarPump";
import "../../Headquarters/css/Items.css";
import "../../Headquarters/css/Common.css";
import "./Party.css";
import PartyHeader from "../../../Components/Header/Pump/Party/PartyHeader";
import AllPage from "./AllPage";
import PartyDetails from "./PartyDetails";
import Vehicle from "./Vehicle";

const Party = () => {
  const [activeItem, setActiveItem] = useState("All");
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
        <SidebarPump page={"Party"} setShowSidebar={setShowSidebar} />
      )}
      <div className="page">
        <PartyHeader
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          setShowSidebar={setShowSidebar}
        />
         {
          activeItem == "All" &&
          <AllPage />
         }
         {
          activeItem == "Details" && 
          <PartyDetails />
         }
         {
          activeItem == "Vehicle" && 
          <Vehicle />
         }
      </div>
    </div>
  );
};

export default Party;
