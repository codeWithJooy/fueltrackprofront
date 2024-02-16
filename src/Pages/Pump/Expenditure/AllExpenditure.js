import React, { useState, useEffect } from "react";
import "../Party/Party.css";
import moment from "moment";
import AddExpenditureModel from "../../../Components/Models/PumpModel/AddExpenditureModel";
import { getPumpExpenditure } from "../../../actions/pumpAction/expenditureAction";

const AllExpenditure = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expenditureModel, setExpenditureModel] = useState(false);
  const [expenditures, setExpenditures] = useState([]);

  const [data, setData] = useState({
    pumpId: localStorage.getItem("pumpId"),
    date: moment().format("YYYY-MM-DD"),
  });
  const handleDate = (e) => [
    setData({ ...data, date: moment().format(e.target.value) }),
  ];
  useEffect(() => {
    (async () => {
      let unit = await getPumpExpenditure(data);
      setExpenditures(unit);
    })();
  }, [expenditureModel, data]);
  return (
    <div className="partyContent">
      <img
        src="Assets/HQ/add.png"
        className="addStock"
        onClick={() => {
          setExpenditureModel(true);
        }}
      />
      <div className="partyDropdownContainers">
        <div className="dropContainer">
          <input type="date" value={data.date} onChange={handleDate} />
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

export default AllExpenditure;
