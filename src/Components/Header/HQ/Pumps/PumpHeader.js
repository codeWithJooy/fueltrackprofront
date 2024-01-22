import React from "react";
import "../Items/ItemsHeader.css";

const PumpHeader = ({ activeItem, setActiveItem ,setShowSidebar}) => {
    const selectItems=(val)=>{
      setActiveItem(val)
    }
    const openSidebar=()=>{
      setShowSidebar(true)
    }
  return (
    <div className="itemsHeader">
      <div className="itemsPageDetails">
        <p>Pumps / {activeItem}</p>
      </div>
      <div className="itemsSelection">
        <img src="Assets/HQ/hamburger.png" className="hamburger" onClick={openSidebar}/>
        <div className={`itemSelectionUnit ${activeItem=="All Pumps"?"activeItemsSelection":""}`} onClick={()=>selectItems("All Pumps")}>
          <p>All Pumps</p>
        </div>
      </div>
    </div>
  );
};

export default PumpHeader;