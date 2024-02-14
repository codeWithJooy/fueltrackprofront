import React from "react";
import "../../HQ/Items/ItemsHeader.css";

const ExpenditureHeader = ({ activeItem, setActiveItem, setShowSidebar }) => {
  const selectItems = (val) => {
    setActiveItem(val);
  };
  const openSidebar = () => {
    setShowSidebar(true);
  };
  return (
    <div className="itemsHeader">
      <div className="itemsPageDetails">
        <p>Expenditure / {activeItem}</p>
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

export default ExpenditureHeader;