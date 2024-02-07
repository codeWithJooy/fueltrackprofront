import React, { useState } from "react";
import "../Party/Party.css";
import AddExpenditureModel from "../../../Components/Models/PumpModel/AddExpenditureModel";

const AllExpenditure = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expenditureModel,setExpenditureModel]=useState(false)
  return (
    <div className="partyContent">
        <img src="Assets/HQ/add.png" className="addStock" onClick={()=>{setExpenditureModel(true)}}/>
      <div className="partyCard">
        <div className="partyCardRow">
          <div className="partyName">
            <p>Expenditure Type</p>
          </div>
          <div className="partyDetailsCardUnit">
            <p>Amount</p>
          </div>
          <div className="partyDetailsCardUnit">
            <p>Expenditure Details</p>
          </div>
          
        </div>
        {
            expenditureModel && 
            <AddExpenditureModel setExpenditureModel={setExpenditureModel} />
        }
      </div>
    </div>
  );
};

export default AllExpenditure;