import React from "react";
import "../Items/ItemsHeader.css";

const LedgerHeader = ({ activeItem, setActiveItem, setShowSidebar }) => {
  const selectItems = (val) => {
    setActiveItem(val);
  };
  const openSidebar = () => {
    setShowSidebar(true);
  };
  return (
    <div className="itemsHeader">
      <div className="itemsPageDetails">
        <p>Ledger / All Parties</p>
      </div>
      <div className="itemsSelection">
        <img
          src="Assets/HQ/hamburger.png"
          className="hamburger"
          onClick={openSidebar}
        />
        <div
          className={`itemSelectionUnit ${
            activeItem == "all" ? "activeItemsSelection" : ""
          }`}
          onClick={() => selectItems("all")}
        >
          <p>Ledger</p>
        </div>
        <div
          className={`itemSelectionUnit ${
            activeItem == "transaction" ? "activeItemsSelection" : ""
          }`}
          onClick={() => selectItems("transaction")}
        >
          <p>Transactions</p>
        </div>
      </div>
    </div>
  );
};

export default LedgerHeader;
