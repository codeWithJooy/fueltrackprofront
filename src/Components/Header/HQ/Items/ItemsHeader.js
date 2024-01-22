import React from "react";
import "./ItemsHeader.css";

const ItemsHeader = ({ activeItem, setActiveItem,setShowSidebar }) => {
    const selectItems=(val)=>{
      setActiveItem(val)
    }
    const openSidebar=()=>{
      setShowSidebar(true)
    }
  return (
    <div className="itemsHeader">
      <div className="itemsPageDetails">
        <p>Items / All Items</p>
      </div>
      <div className="itemsSelection">
      <img src="Assets/HQ/hamburger.png" className="hamburger" onClick={openSidebar}/>
        <div className={`itemSelectionUnit ${activeItem=="all"?"activeItemsSelection":""}`} onClick={()=>selectItems("all")}>
          <p>Items</p>
        </div>
        <div className={`itemSelectionUnit ${activeItem=="pumpwise"?"activeItemsSelection":""}`} onClick={()=>selectItems("pumpwise")}>
          <p>Pumps</p>
        </div>
        <div className={`itemSelectionUnit ${activeItem=="newreq"?"activeItemsSelection":""}`} onClick={()=>selectItems("newreq")}>
          <p>New </p>
        </div>
      </div>
    </div>
  );
};

export default ItemsHeader;
