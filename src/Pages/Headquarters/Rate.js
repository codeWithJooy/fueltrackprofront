import React, { useState, useEffect } from "react";
import SidebarHQ from "../../Components/Sidebar/SidebarHQ";
import "./css/Items.css";
import "./css/Common.css";
import StocksHeader from "../../Components/Header/HQ/Stocks/StocksHeader";
import Tanks from "../../Components/HQ/Stock/Tanks/Tanks";
import Nozels from "../../Components/HQ/Stock/Nozels/Nozels";
import Other from "../../Components/HQ/Stock/Other/Other";
import RateHeader from "../../Components/Header/HQ/Rate/RateHeader";
import Today from "../../Components/HQ/Rate/Today/Today";
import Previous from "../../Components/HQ/Rate/Today/Previous";

const Rate = () => {
  const [activeItem, setActiveItem] = useState("Today");
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
        <SidebarHQ page={"Rate"} setShowSidebar={setShowSidebar} />
      )}
      <div className="page">
        <RateHeader
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          setShowSidebar={setShowSidebar} />

        {activeItem == "Today" && <Today />}
        {activeItem == "Previous" && <Previous />}
      </div>
    </div>
  );
};

export default Rate;