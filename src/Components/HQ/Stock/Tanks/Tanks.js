import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import "./Tanks.css";
import Dropdown from "../../../Dropdown/Dropdown";
import AddtankModel from "../../../Models/AddTankModel";
import NotPresent from "../../../NotPresent/NotPresent";
import { getTanks } from "../../../../actions/stockAction";

const Tanks = () => {
  const ownerId=localStorage.getItem("ownerId")
  const [pumpId, setPumpId] = useState("");
  const [tankModel, setTankModel] = useState(false);
  const [tanks, setTanks] = useState([]);
  const openModel = () => {
    setTankModel(true);
  };
  useEffect(() => {
    if (tankModel) return;
    (async () => {
      let data = await getTanks(ownerId, pumpId);
      setTanks(data);
    })();
  }, [tankModel,pumpId]);
  return (
    <div className="pageSection">
      <Dropdown pumpId={pumpId} setPumpId={setPumpId} />
      <img src="Assets/HQ/add.png" className="addStock" onClick={openModel} />
      {
        tanks.length <1 && <NotPresent />
      }
      {
        tanks.length >=1 && 
        <table>
        <thead style={{ background: "#19363C", color: "white" }}>
          <tr>
            <th>Tank Name</th>
            <th>Product Name</th>
            <th>Quantity(in Lts)</th>
          </tr>
        </thead>
        <tbody>
          {tanks.map((tank) => (
            <tr key={tank._id}>
              <td>{tank.tankName}</td>
              <td>{tank.product}</td>
              <td>{tank.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
      }
      {tankModel && (
        <AddtankModel
          setTankModel={setTankModel}
          ownerId={ownerId}
          pumpId={pumpId}
        />
      )}
    </div>
  );
};

export default Tanks;
