import React, { useState } from "react";
import "../Party/Party.css";
import "../common.css"
import AddExpenditureType from "../../../Components/Models/PumpModel/AddExpenditureType";

const ExpenditureType = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expenditureTypeModel,setExpenditureType]=useState(false)
  return (
    <div className="partyContent">
        <img src="Assets/HQ/add.png" className="addStock" onClick={()=>setExpenditureType(true)}/>
        <div className="boxCard">
            <div className="boxCardImg">
                <img src="Assets/HQ/expenditure.png" />
            </div>
            <div className="boxCardTitle">
                <p>Expense Type</p>
            </div>
        </div>
        {
            expenditureTypeModel && 
            <AddExpenditureType setExpenditureType={setExpenditureType} />
        }
       
    </div>
  );
};

export default ExpenditureType;