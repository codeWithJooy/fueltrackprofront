import React, { useState, useEffect } from "react";
import SidebarHQ from "../../Components/Sidebar/SidebarHQ";
import "./css/Items.css";
import "./css/Common.css";
import StocksHeader from "../../Components/Header/HQ/Stocks/StocksHeader";
import Tanks from "../../Components/HQ/Stock/Tanks/Tanks";
import Nozels from "../../Components/HQ/Stock/Nozels/Nozels";

const Stock = () => {
  const [activeItem,setActiveItem]=useState("Tanks")
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
        showSidebar && <SidebarHQ page={"Stock"} setShowSidebar={setShowSidebar}/>
      }
      <div className="page">
        <StocksHeader activeItem={activeItem} setActiveItem={setActiveItem}  setShowSidebar={setShowSidebar}/>
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