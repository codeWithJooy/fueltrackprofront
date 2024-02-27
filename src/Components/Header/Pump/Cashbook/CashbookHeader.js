import React from "react";
import "../../HQ/Items/ItemsHeader.css";

const CashbookHeader = ({ activeItem, setActiveItem, setShowSidebar }) => {
  const selectItems = (val) => {
    setActiveItem(val);
  };
  const openSidebar = () => {
    setShowSidebar(true);
  };
  return (
    <div className="itemsHeader">
      <div className="itemsPageDetails">
        <p>Cashbook / {activeItem}</p>
      </div>
      <div className="itemsSelection">
        <img
          src="Assets/HQ/hamburger.png"
          className="hamburger"
          onClick={openSidebar}
        />

        <div
          className={`itemSelectionUnit ${
            activeItem == "Sale" ? "activeItemsSelection" : ""
          }`}
          onClick={() => selectItems("Sale")}
        >
          <p>Sale</p>
        </div>
        <div
          className={`itemSelectionUnit ${
            activeItem == "Party" ? "activeItemsSelection" : ""
          }`}
          onClick={() => selectItems("Party")}
        >
          <p>Party</p>
        </div>
        <div
          className={`itemSelectionUnit ${
            activeItem == "Purchase" ? "activeItemsSelection" : ""
          }`}
          onClick={() => selectItems("Purchase")}
        >
          <p>Purchase</p>
        </div>
        <div
          className={`itemSelectionUnit ${
            activeItem == "Stocks" ? "activeItemsSelection" : ""
          }`}
          onClick={() => selectItems("Stocks")}
        >
          <p>Stocks</p>
        </div>
        <div
          className={`itemSelectionUnit ${
            activeItem == "Expenditure" ? "activeItemsSelection" : ""
          }`}
          onClick={() => selectItems("Expenditure")}
        >
          <p>Expenditure</p>
        </div>
      </div>
    </div>
  );
};

export default CashbookHeader;
