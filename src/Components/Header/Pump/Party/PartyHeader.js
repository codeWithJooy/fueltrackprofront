import React from "react";
import "../../HQ/Items/ItemsHeader.css";

const PartyHeader = ({ activeItem, setActiveItem, setShowSidebar }) => {
  const selectItems = (val) => {
    setActiveItem(val);
  };
  const openSidebar = () => {
    setShowSidebar(true);
  };
  return (
    <div className="itemsHeader">
      <div className="itemsPageDetails">
        <p>Party / {activeItem}</p>
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
            activeItem == "Details" ? "activeItemsSelection" : ""
          }`}
          onClick={() => selectItems("Details")}
        >
          <p>Details</p>
        </div>
        <div
          className={`itemSelectionUnit ${
            activeItem == "Vehicle" ? "activeItemsSelection" : ""
          }`}
          onClick={() => selectItems("Vehicle")}
        >
          <p>Vehicle</p>
        </div>
      </div>
    </div>
  );
};

export default PartyHeader;