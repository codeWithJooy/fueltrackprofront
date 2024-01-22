import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux"
import Dropdown from "../../Dropdown/Dropdown";
import NotPresent from "../../NotPresent/NotPresent";
import AddLedgerModel from "../../Models/AddLedgerModel";

const LedgerUnit = () => {
  const { ownerId } = useSelector((state) => state.user);
  const [pumpId, setPumpId] = useState("");
  const [ledgerModel, setledgerModel] = useState(false);
  const [ledger, setLedger] = useState([]);
  const openModel = () => {
    setledgerModel(true);
  };

  return (
    <div className="pageSection">
      <Dropdown pumpId={pumpId} setPumpId={setPumpId} />
      <img src="Assets/HQ/add.png" className="addStock" onClick={openModel} />
      {
        ledger.length <1 &&  <NotPresent text={"No Ledger Added"}/>
      }
      {
        ledger.length >=1 && 
        <table>
        <thead style={{ background: "#19363C", color: "white" }}>
          <tr>
            <th>Tank Name</th>
            <th>Product Name</th>
            <th>Quantity(in Lts)</th>
          </tr>
        </thead>
        <tbody>
          {ledger.map((tank) => (
            <tr key={tank._id}>
              <td>{tank.tankName}</td>
              <td>{tank.product}</td>
              <td>{tank.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
      }
      {
        ledgerModel && 
        (
          <AddLedgerModel
            setLedgerModel={setledgerModel}
            ownerId={ownerId}
            pumpId={pumpId}
          />
        )
      }
      
    </div>
  );
};

export default LedgerUnit;
