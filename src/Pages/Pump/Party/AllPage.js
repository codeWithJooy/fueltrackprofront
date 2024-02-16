import React, { useState, useEffect } from "react";
import AddPartySalesModel from "../../../Components/Models/PumpModel/AddPartySalesModel";
import {
  getPartySales,
  getPartyName,
} from "../../../actions/pumpAction/partyAction";
import moment from "moment";

const AllPage = () => {
  const [partySalesModel, setPartySalesModel] = useState(false);
  const [partyData, setPartyData] = useState([]);
  const [partyName, setPartyName] = useState([]);

  const [search, setSearch] = useState({
    pumpId: localStorage.getItem("pumpId"),
    partyName: "",
    date: moment().format("YYYY-MM-DD"),
    salesLedger: "",
  });

  const handleDate=(e)=>{
    setSearch({...search,date:moment().format(e.target.value)})
  }
  const handleLedger=(e)=>{
    setSearch({...search,salesLedger:e.target.value})
  }
  const handleParty=(e)=>{
    setSearch({...search,partyName:e.target.value})
  }
  useEffect(() => {
    (async () => {
      let party = await getPartySales(search);
      setPartyData(party);
    })();
  }, [partySalesModel,search]);

  useEffect(() => {
   (
    async () => {
      let name = await getPartyName(localStorage.getItem("pumpId"));
      setPartyName(name);
    }
   )()
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
              {partyName && partyName.map((data) => <option>{data.partyName}</option>)}
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
            <input type="date" name="data" value={search.date} onChange={handleDate}/>
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
