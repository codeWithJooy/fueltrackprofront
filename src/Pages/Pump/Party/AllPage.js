import React, { useState,useEffect } from "react";
import AddPartySalesModel from "../../../Components/Models/PumpModel/AddPartySalesModel";
import { getPartySales } from "../../../actions/pumpAction/partyAction";
const AllPage = () => {
  const [partySalesModel, setPartySalesModel] = useState(false);
  const [partyData, setPartyData] = useState([]);

  useEffect(() => {
    (async () => {
      let party = await getPartySales({pumpId:localStorage.getItem("pumpId")});
      setPartyData(party);
    })();
  }, [partySalesModel]);
  return (
    <div className="partyContent">
      <img
        src="Assets/HQ/add.png"
        className="addStock"
        onClick={() => setPartySalesModel(true)}
      />
      <div className="partyDropdowns">
        <div className="partyDropdownContainers">
          <div className="dropContainer">
            <select>
              <option>Party1</option>
              <option>Party1</option>
            </select>
          </div>
          <div className="dropContainer">
            <select>
              <option>Sales Ledger 1</option>
              <ption>Sales Ledger 2</ption>
            </select>
          </div>
          <div className="dropContainer">
            <input type="date" />
          </div>
        </div>
      </div>
      <div className="partyCardHolder">
        {partyData &&
          partyData.map((unit) => (
            <>
              <div className="partyCard">
                <div className="partyDetails">
                  <div className="partyName">
                    <p>{unit.partyName}</p>
                  </div>
                  <div className="partyCardUnit">
                    <p>{unit.vehicle}</p>
                  </div>
                  <div className="partyCardUnit">
                    <p>{unit.item}</p>
                  </div>
                  <div className="partyCardUnit">
                    <p>{unit.salesLedger}</p>
                  </div>
                </div>
                <div className="partyDetails">
                  <div className="partyName">
                    <p>Quantity:{unit.qty}</p>
                  </div>
                  <div className="partyCardUnit">
                    <p>Rate:{unit.rate}</p>
                  </div>
                  <div className="partyCardUnit">
                    <p>Amount:{unit.amount}</p>
                  </div>
                  <div className="partyCardUnit">
                    <p>{unit.status}</p>
                  </div>
                </div>
              </div>
            </>
          ))}
      </div>
      {partySalesModel && (
        <AddPartySalesModel setPartySalesModel={setPartySalesModel} />
      )}
    </div>
  );
};

export default AllPage;
