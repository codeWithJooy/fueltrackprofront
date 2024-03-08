import React, { useState, useEffect } from "react";
import AddPartySalesModel from "../../../Components/Models/PumpModel/AddPartySalesModel";
import {
  getPartySales,
  getPartyName,
  getPartySalesRange,
} from "../../../actions/pumpAction/partyAction";
import moment from "moment";

const PartyRange = () => {
  const [partySalesModel, setPartySalesModel] = useState(false);
  const [partyData, setPartyData] = useState([]);
  const [partyName, setPartyName] = useState([]);

  const [search, setSearch] = useState({
    pumpId: localStorage.getItem("pumpId"),
    partyName: "",
    initialDate: moment().format("YYYY-MM-DD"),
    finalDate: moment().format("YYYY-MM-DD"),
    salesLedger: "",
  });

  const handleInitialDate = (e) => {
    setSearch({ ...search, initialDate: moment().format(e.target.value) });
  };
  const handleFinalDate = (e) => {
    setSearch({ ...search, finalDate: moment().format(e.target.value) });
  };
  const handleLedger = (e) => {
    setSearch({ ...search, salesLedger: e.target.value });
  };
  const handleParty = (e) => {
    setSearch({ ...search, partyName: e.target.value });
  };
  useEffect(() => {
    (async () => {
      let party = await getPartySalesRange(search);
      setPartyData(party);
    })();
  }, [partySalesModel, search]);

  useEffect(() => {
    (async () => {
      let name = await getPartyName(localStorage.getItem("pumpId"));
      setPartyName(name);
    })();
  }, []);

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
            <select onChange={handleParty}>
              <option value="">All Party</option>
              {partyName &&
                partyName.map((data) => <option>{data.partyName}</option>)}
            </select>
          </div>
          <div className="dropContainer">
            <select onChange={handleLedger}>
              <option value="">All Ledger</option>
              <option>Kaccha</option>
              <option>Pakka</option>
            </select>
          </div>
          <div className="dropContainer">
            <input
              type="date"
              name="data"
              value={search.initialDate}
              onChange={handleInitialDate}
            />
          </div>
          <div className="dropContainer">
            <input
              type="date"
              name="data"
              value={search.finalDate}
              onChange={handleFinalDate}
            />
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

export default PartyRange;
