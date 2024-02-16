import React, { useEffect, useState } from "react";
import "../Party/Party.css";
import "../common.css";
import AddExpenditureType from "../../../Components/Models/PumpModel/AddExpenditureType";
import { getExpenditureType } from "../../../actions/pumpAction/expenditureAction";

const ExpenditureType = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expenditureTypeModel, setExpenditureType] = useState(false);
  const [types, setTypes] = useState([]);
  useEffect(() => {
    (async () => {
      let unit = await getExpenditureType({
        pumpId: localStorage.getItem("pumpId"),
      });
      setTypes(unit);
    })();
  }, [expenditureTypeModel]);
  return (
    <div className="partyContent">
      <img
        src="Assets/HQ/add.png"
        className="addStock"
        onClick={() => setExpenditureType(true)}
      />
      <div className="boxContainer">
        {types &&
          types.map((data) => (
            <>
              <div className="boxCard">
                <div className="boxCardImg">
                  <img src="Assets/HQ/expenditure.png" />
                </div>
                <div className="boxCardTitle">
                  <p>{data.expenditureType}</p>
                </div>
              </div>
            </>
          ))}
      </div>

      {expenditureTypeModel && (
        <AddExpenditureType setExpenditureType={setExpenditureType} />
      )}
    </div>
  );
};

export default ExpenditureType;
