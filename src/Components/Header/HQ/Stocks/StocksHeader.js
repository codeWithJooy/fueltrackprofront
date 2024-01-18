import React from "react";
import "../Items/ItemsHeader.css";

const StocksHeader = ({ activeItem, setActiveItem }) => {
    const selectItems=(val)=>{
      setActiveItem(val)
    }
  return (
    <div className="itemsHeader">
      <div className="itemsPageDetails">
        <p>Stocks / {activeItem}</p>
      </div>
      <div className="itemsSelection">
        <div className={`itemSelectionUnit ${activeItem=="Tanks"?"activeItemsSelection":""}`} onClick={()=>selectItems("Tanks")}>
          <p>Tanks</p>
        </div>
        <div className={`itemSelectionUnit ${activeItem=="Nozels"?"activeItemsSelection":""}`} onClick={()=>selectItems("Nozels")}>
          <p>Nozels</p>
        </div>
        <div className={`itemSelectionUnit ${activeItem=="NPDs"?"activeItemsSelection":""}`} onClick={()=>selectItems("NPDs")}>
          <p>NPDs</p>
        </div>
        <div className={`itemSelectionUnit ${activeItem=="Others"?"activeItemsSelection":""}`} onClick={()=>selectItems("Others")}>
          <p>Others</p>
        </div>
      </div>
    </div>
  );
};

export default StocksHeader;