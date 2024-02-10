import React, { useEffect, useState } from "react";
import "../Party/Party.css";

import AddOtherSalesModel from "../../../Components/Models/PumpModel/AddOtherSalesModel";
import { getOtherSale } from "../../../actions/pumpAction/salesAction";
import moment from "moment";

const OtherSale = () => {
  const [otherSalesModel, setOtherSalesModel] = useState(false);
  const [dropData, setDropData] = useState({
    pumpId: localStorage.getItem("pumpId"),
    productId: "",
    date: moment().format("YYYY-MM-DD"),
  });
  const [otherData, setOtherData] = useState(false);

  let pumpId = localStorage.getItem("pumpId");

  useEffect(() => {
    (async () => {
      let data = await getOtherSale(dropData);
      setOtherData(data);
    })();
  }, [dropData,otherSalesModel]);

  return (
    <div className="partyContent">
      <img
        src="Assets/HQ/add.png"
        className="addStock"
        onClick={() => {
          setOtherSalesModel(true);
        }}
      />
      <div className="partyDropdowns">
        <div className="partyDropdownContainers">
          <div className="dropContainer">
            <select>
              <option>All</option>
              <option>Product 1</option>
              <option>Product 2</option>
            </select>
          </div>
          <div className="dropContainer">
            <input type="date" />
          </div>
        </div>
      </div>
      {otherData &&
        otherData.map((data) => (
          <>
            <div className="partyCard">
              <div className="partyCardRow">
                <div className="partyName">
                  <p>{data.productName}</p>
                </div>
                <div className="partyDetailsCardUnit">
                  <p>{data.quantity}</p>
                </div>
                <div className="partyDetailsCardUnit">
                  <p>{data.rate}</p>
                </div>
                <div className="partyDetailsCardUnit">
                  <p>{data.amount}</p>
                </div>
              </div>
            </div>
          </>
        ))}
      {otherSalesModel && (
        <AddOtherSalesModel setOtherSalesModel={setOtherSalesModel} />
      )}
    </div>
  );
};

export default OtherSale;
