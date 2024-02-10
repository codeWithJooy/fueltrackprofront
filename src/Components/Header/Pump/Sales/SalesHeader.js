import React from "react";
import "../../HQ/Items/ItemsHeader.css";

const SalesHeader = ({ activeItem, setActiveItem, setShowSidebar }) => {
  const selectItems = (val) => {
    setActiveItem(val);
  };
  const openSidebar = () => {
    setShowSidebar(true);
  };
  return (
    <div className="itemsHeader">
      <div className="itemsPageDetails">
        <p>Sales / {activeItem}</p>
      </div>
      <div className="itemsSelection">
        <img
          src="Assets/HQ/hamburger.png"
          className="hamburger"
          onClick={openSidebar}
        />

        <div
          className={`itemSelectionUnit ${
            activeItem == "Nozel" ? "activeItemsSelection" : ""
          }`}
          onClick={() => selectItems("Nozel")}
        >
          <p>Nozels</p>
        </div>
        <div
          className={`itemSelectionUnit ${
            activeItem == "Others" ? "activeItemsSelection" : ""
          }`}
          onClick={() => selectItems("Others")}
        >
          <p>Others</p>
        </div>
        <div
          className={`itemSelectionUnit ${
            activeItem == "Ledger" ? "activeItemsSelection" : ""
          }`}
          onClick={() => selectItems("Ledger")}
        >
          <p>Ledger</p>
        </div>
      </div>
    </div>
  );
};

export default SalesHeader;