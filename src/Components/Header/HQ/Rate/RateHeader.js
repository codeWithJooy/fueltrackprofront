import React from "react";
import "../Items/ItemsHeader.css";

const RateHeader = ({ activeItem, setActiveItem, setShowSidebar }) => {
  const selectItems = (val) => {
    setActiveItem(val);
  };
  const openSidebar = () => {
    setShowSidebar(true);
  };
  return (
    <div className="itemsHeader">
      <div className="itemsPageDetails">
        <p>Rate / {activeItem}</p>
      </div>
      <div className="itemsSelection">
        <img
          src="Assets/HQ/hamburger.png"
          className="hamburger"
          onClick={openSidebar}
        />
        <div
          className={`itemSelectionUnit ${
            activeItem == "Today" ? "activeItemsSelection" : ""
          }`}
          onClick={() => selectItems("Today")}
        >
          <p>Today</p>
        </div>
        <div
          className={`itemSelectionUnit ${
            activeItem == "Previous" ? "activeItemsSelection" : ""
          }`}
          onClick={() => selectItems("Previous")}
        >
          <p>Previous</p>
        </div>
      </div>
    </div>
  );
};

export default RateHeader;