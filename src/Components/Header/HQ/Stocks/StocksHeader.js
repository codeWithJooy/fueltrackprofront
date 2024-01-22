import React from "react";
import "../Items/ItemsHeader.css";

const StocksHeader = ({ activeItem, setActiveItem, setShowSidebar }) => {
  const selectItems = (val) => {
    setActiveItem(val);
  };
  const openSidebar = () => {
    setShowSidebar(true);
  };
  return (
    <div className="itemsHeader">
      <div className="itemsPageDetails">
        <p>Stocks / {activeItem}</p>
      </div>
      <div className="itemsSelection">
        <img
          src="Assets/HQ/hamburger.png"
          className="hamburger"
          onClick={openSidebar}
        />
        <div
          className={`itemSelectionUnit ${
            activeItem == "Tanks" ? "activeItemsSelection" : ""
          }`}
          onClick={() => selectItems("Tanks")}
        >
          <p>Tanks</p>
        </div>
        <div
          className={`itemSelectionUnit ${
            activeItem == "Nozels" ? "activeItemsSelection" : ""
          }`}
          onClick={() => selectItems("Nozels")}
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
      </div>
    </div>
  );
};

export default StocksHeader;
