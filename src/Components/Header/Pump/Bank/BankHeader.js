import React from "react";
import "../../HQ/Items/ItemsHeader.css";

const BankHeader = ({ activeItem, setActiveItem, setShowSidebar }) => {
  const selectItems = (val) => {
    setActiveItem(val);
  };
  const openSidebar = () => {
    setShowSidebar(true);
  };
  return (
    <div className="itemsHeader">
      <div className="itemsPageDetails">
        <p>Bank / {activeItem}</p>
      </div>
      <div className="itemsSelection">
        <img
          src="Assets/HQ/hamburger.png"
          className="hamburger"
          onClick={openSidebar}
        />
        <div
          className={`itemSelectionUnit ${
            activeItem == "Party Receipt" ? "activeItemsSelection" : ""
          }`}
          onClick={() => selectItems("Party Receipt")}
        >
          <p>Party Receipt</p>
        </div>
        <div
          className={`itemSelectionUnit ${
            activeItem == "Party Payment" ? "activeItemsSelection" : ""
          }`}
          onClick={() => selectItems("Party Payment")}
        >
          <p>Party Payment</p>
        </div>
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
            activeItem == "Type" ? "activeItemsSelection" : ""
          }`}
          onClick={() => selectItems("Type")}
        >
          <p>Type</p>
        </div>
      </div>
    </div>
  );
};

export default BankHeader;
