import React, { useState } from "react";
import "../Party/Party.css";
import "../common.css"
import AddSalesLedgerModel from "../../../Components/Models/PumpModel/AddSalesLedgerModel";

const LedgerType = () => {
  const [isOpen, setIsOpen] = useState(false);
 const [salesLedgerModel,setSalesLedgerModel]=useState(false)
  return (
    <div className="partyContent">
        <img src="Assets/HQ/add.png" className="addStock" onClick={()=>setSalesLedgerModel(true)}/>
        <div className="boxCard">
            <div className="boxCardImg">
                <img src="Assets/HQ/sales.png" />
            </div>
            <div className="boxCardTitle">
                <p>Sales Ledger</p>
            </div>
        </div>
        {
            salesLedgerModel && 
            <AddSalesLedgerModel setSalesLedgerModel={setSalesLedgerModel} />
        }
       
    </div>
  );
};

export default LedgerType;