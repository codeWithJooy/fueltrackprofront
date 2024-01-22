import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux"
import Dropdown from "../../Dropdown/Dropdown";
import NotPresent from "../../NotPresent/NotPresent";
import AddLedgerModel from "../../Models/AddLedgerModel";
import { getLedger } from "../../../actions/ledgerAction";

const LedgerUnit = () => {
  const { ownerId } = useSelector((state) => state.user);
  const [pumpId, setPumpId] = useState("");
  const [ledgerModel, setledgerModel] = useState(false);
  const [ledger, setLedger] = useState([]);
  const openModel = () => {
    setledgerModel(true);
  };
  useEffect(() => {
    if (ledgerModel) return;
    (async () => {
      let data = await getLedger(ownerId,pumpId);
      setLedger(data);
    })();
  }, [ledgerModel,pumpId]);
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
            <th>Party Name</th>
            <th>House</th>
            <th>City</th>
            <th>State</th>
            <th>Phone</th>
            <th>Opening Balance</th>
          </tr>
        </thead>
        <tbody>
          {ledger.map((ledgerData) => (
            <tr key={ledgerData._id}>
              <td>{ledgerData.partyName}</td>
              <td>{ledgerData.house}</td>
              <td>{ledgerData.city}</td>
              <td>{ledgerData.state}</td>
              <td>{ledgerData.mobile}</td>
              <td>{ledgerData.openingBalance}</td>
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
