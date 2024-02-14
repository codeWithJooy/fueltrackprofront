import React, { useEffect, useState } from "react";
import "../Party/Party.css";
import {
  getNozelByPumpId,
  getPumpNozelSale,
} from "../../../actions/pumpAction/salesAction";
import moment from "moment";
import AddPurchaseModel from "../../../Components/Models/PumpModel/AddPurchaseModel";

const AllPurchase = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [nozels, setNozels] = useState([]);
  const [sale, setSale] = useState([]);
  const [purchaseModel, setPurchaseModel] = useState(false);

  let pumpId = localStorage.getItem("pumpId");

  const [searchData, setSearchData] = useState({
    nozel: "All",
    date: moment().format("YYYY-MM-DD"),
  });

  useEffect(() => {
    (async () => {
      let nozelsData = await getNozelByPumpId(pumpId);
      setNozels(nozelsData);
    })();
  }, [purchaseModel]);
  useEffect(() => {
    (async () => {
      let nozelData = await getPumpNozelSale(pumpId);
      setSale(nozelData);
    })();
  }, [purchaseModel]);
  return (
    <div className="partyContent">
      <img
        src="Assets/HQ/add.png"
        className="addStock"
        onClick={() => {
          setPurchaseModel(true);
        }}
      />
      <div className="partyDropdowns">
        <div className="partyDropdownContainers">
          <div className="dropContainer">
            <select>
              <option value="Pending">Pending</option>
              <option value="Approved">Approved</option>
              <option value="Rejected">Rejected</option>
            </select>
          </div>
          <div className="dropContainer">
            <input type="date" value={searchData.date} />
          </div>
        </div>
      </div>
      {sale &&
        sale.map((data, index) => (
          <div className="partyCard">
            <div className="partyCardRow">
              <div className="partyName">
                <p>{data.nozelName}</p>
              </div>
              <div className="partyDetailsCardUnit">
                <p>Opening:{data.openingMeter}</p>
              </div>
              <div className="partyDetailsCardUnit">
                <p>Closing:{data.closingMeter}</p>
              </div>
              <div className="partDetailsCardUnitDrop">
                <img
                  src={
                    `${isOpen}` == true
                      ? "Assets/HQ/up.png"
                      : "Assets/HQ/down.png"
                  }
                  onClick={() => setIsOpen(!isOpen)}
                />
              </div>
            </div>
            {isOpen && (
              <>
                <div className="partyCardRow">
                  <div className="partyDetailsCardUnit">
                    <p>Testing:{data.testing}</p>
                  </div>
                  <div className="partyDetailsCardUnit">
                    <p>Add. In:{data.additionalIn}</p>
                  </div>
                  <div className="partyDetailsCardUnit">
                    <p>Add. Out:{data.additionalOut}</p>
                  </div>
                  <div className="partyDetailsCardUnit">
                    <p>Net Sales:{data.netSales}</p>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      {purchaseModel && (
        <AddPurchaseModel setPurchaseModel={setPurchaseModel} />
      )}
    </div>
  );
};

export default AllPurchase;
