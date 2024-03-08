import React, { useState, useEffect } from "react";
import "../Party/Party.css";
import moment from "moment";
import AddExpenditureModel from "../../../Components/Models/PumpModel/AddExpenditureModel";
import { getPumpExpenditure, getPumpExpenditureRange } from "../../../actions/pumpAction/expenditureAction";

const ExpenditureRange = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expenditureModel, setExpenditureModel] = useState(false);
  const [expenditures, setExpenditures] = useState([]);

  const [data, setData] = useState({
    pumpId: localStorage.getItem("pumpId"),
    initialDate: moment().format("YYYY-MM-DD"),
    finalDate:moment().format('YYYY-MM-DD')
  });

  const handleFinalDate=(e)=>{
    setData({...data,finalDate: moment().format(e.target.value)})
  }
  const handleInitialDate=(e)=>{
    setData({...data,initialDate: moment().format(e.target.value)})
  }
  
  useEffect(() => {
    (async () => {
      let unit = await getPumpExpenditureRange(data)
      setExpenditures(unit);
    })();
  }, [expenditureModel, data]);
  return (
    <div className="partyContent">
      <div className="partyDropdownContainers">
        <div className="dropContainer">
          <input type="date" value={data.initialDate} onChange={handleInitialDate} />
        </div>
        <div className="dropContainer">
          <input type="date" value={data.finalDate} onChange={handleFinalDate} />
        </div>
      </div>
     
        {expenditures &&
          expenditures.map(
            (data) =>(
              <> <div className="partyCard">
                <div className="partyCardRow">
                  <div className="partyName">
                    <p>{data.expenditureType}</p>
                  </div>
                  <div className="partyDetailsCardUnit">
                    <p>Rs {data.amount}</p>
                  </div>
                  <div className="partyDetailsCardUnit">
                    <p>{data.details}</p>
                  </div>
                </div> </div>
              </>
            )
          )}
        {expenditureModel && (
          <AddExpenditureModel setExpenditureModel={setExpenditureModel} />
        )}
     
    </div>
  );
};

export default ExpenditureRange;