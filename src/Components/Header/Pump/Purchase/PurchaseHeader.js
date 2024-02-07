import React from "react";
import "../../HQ/Items/ItemsHeader.css";

const PurchaseHeader = ({ activeItem, setActiveItem, setShowSidebar }) => {
  const selectItems = (val) => {
    setActiveItem(val);
  };
  const openSidebar = () => {
    setShowSidebar(true);
  };
  return (
    <div className="itemsHeader">
      <div className="itemsPageDetails">
        <p>Purchase / {activeItem}</p>
      </div>
      <div className="itemsSelection">
        <img
          src="Assets/HQ/hamburger.png"
          className="hamburger"
          onClick={openSidebar}
        />
        <div
          className={`itemSelectionUnit ${
            activeItem == "All" ? "activeItemsSelection" : ""
          }`}
          onClick={() => selectItems("All")}
        >
          <p>All</p>
        </div>
        <div
          className={`itemSelectionUnit ${
            activeItem == "Ledger" ? "activeItemsSelection" : ""
          }`}
          onClick={() => selectItems("Ledger")}
        >
          <p>Purchase Ledger</p>
        </div>
      </div>
    </div>
  );
};

export default PurchaseHeader;