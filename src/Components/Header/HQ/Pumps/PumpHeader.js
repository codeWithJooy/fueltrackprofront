import React from "react";
import "../Items/ItemsHeader.css";

const PumpHeader = ({ activeItem, setActiveItem }) => {
    const selectItems=(val)=>{
      setActiveItem(val)
    }
  return (
    <div className="itemsHeader">
      <div className="itemsPageDetails">
        <p>Pumps / {activeItem}</p>
      </div>
      <div className="itemsSelection">
        <div className={`itemSelectionUnit ${activeItem=="All Pumps"?"activeItemsSelection":""}`} onClick={()=>selectItems("All Pumps")}>
          <p>All Pumps</p>
        </div>
      </div>
    </div>
  );
};

export default PumpHeader;