import React from "react";
import "../Items/ItemsHeader.css";

const LedgerHeader = ({ activeItem, setActiveItem }) => {
    const selectItems=(val)=>{
      setActiveItem(val)
    }
  return (
    <div className="itemsHeader">
      <div className="itemsPageDetails">
        <p>Ledger / All Parties</p>
      </div>
      <div className="itemsSelection">
        <div className={`itemSelectionUnit ${activeItem=="all"?"activeItemsSelection":""}`} onClick={()=>selectItems("all")}>
          <p>Ledger</p>
        </div>
        <div className={`itemSelectionUnit ${activeItem=="new"?"activeItemsSelection":""}`} onClick={()=>selectItems("new")}>
          <p>Add New</p>
        </div>
        <div className={`itemSelectionUnit ${activeItem=="transaction"?"activeItemsSelection":""}`} onClick={()=>selectItems("transaction")}>
          <p>Transactions</p>
        </div>
      </div>
    </div>
  );
};

export default LedgerHeader;