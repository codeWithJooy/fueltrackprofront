import React from "react";
import "./ItemsHeader.css";

const ItemsHeader = ({ activeItem, setActiveItem }) => {
    const selectItems=(val)=>{
      setActiveItem(val)
    }
  return (
    <div className="itemsHeader">
      <div className="itemsPageDetails">
        <p>Items / All Items</p>
      </div>
      <div className="itemsSelection">
        <div className={`itemSelectionUnit ${activeItem=="all"?"activeItemsSelection":""}`} onClick={()=>selectItems("all")}>
          <p>Items</p>
        </div>
        <div className={`itemSelectionUnit ${activeItem=="pumpwise"?"activeItemsSelection":""}`} onClick={()=>selectItems("pumpwise")}>
          <p>Pump Wise</p>
        </div>
        <div className={`itemSelectionUnit ${activeItem=="newreq"?"activeItemsSelection":""}`} onClick={()=>selectItems("newreq")}>
          <p>New Request</p>
        </div>
        <div className={`itemSelectionUnit ${activeItem=="types"?"activeItemsSelection":""}`} onClick={()=>selectItems("types")}>
          <p>Types</p>
        </div>
      </div>
    </div>
  );
};

export default ItemsHeader;
