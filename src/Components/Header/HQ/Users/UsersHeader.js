import React from "react";
import "../Items/ItemsHeader.css";

const UsersHeader = ({ activeItem, setActiveItem, setShowSidebar }) => {
  const selectItems = (val) => {
    setActiveItem(val);
  };
  const openSidebar = () => {
    setShowSidebar(true);
  };
  return (
    <div className="itemsHeader">
      <div className="itemsPageDetails">
        <p>Users / {activeItem}</p>
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
          <p>All Users</p>
        </div>

      </div>
    </div>
  );
};

export default UsersHeader;