import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Dropdown from "../../../Dropdown/Dropdown";
import AddNoFuelModel from "../../../Models/AddNoFuelModel";
import NotPresent from "../../../NotPresent/NotPresent";
import { getNoFuel, getTanks } from "../../../../actions/stockAction";

const Other = () => {
  const ownerId=localStorage.getItem("ownerId")

  const [pumpId, setPumpId] = useState("");
  const [NoFuelModel, setNoFuelModel] = useState(false);
  const [others, setOthers] = useState([]);
  const openModel = () => {
    setNoFuelModel(true);
  };
  useEffect(() => {
    if (NoFuelModel) return;
    (async () => {
      let data = await getNoFuel(ownerId,pumpId);
      setOthers(data);
    })();
  }, [NoFuelModel,pumpId]);
  return (
    <div className="pageSection">
      <Dropdown pumpId={pumpId} setPumpId={setPumpId} />
      <img src="Assets/HQ/add.png" className="addStock" onClick={openModel} />
      {
        others.length <1 && <NotPresent text="No Non Fuel Product Added"/>
      }
      {
        others.length >=1 && 
        <table>
        <thead style={{ background: "#19363C", color: "white" }}>
          <tr>
            <th>Product Name</th>
            <th>Size</th>
            <th>Quantity(in Nos.)</th>
          </tr>
        </thead>
        <tbody>
          {others.map((tank) => (
            <tr key={tank._id}>
              <td>{tank.productName}</td>
              <td>{tank.size}</td>
              <td>{tank.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
      }
      {NoFuelModel && (
        <AddNoFuelModel
          setNoFuelModel={setNoFuelModel}
          ownerId={ownerId}
          pumpId={pumpId}
        />
      )}
    </div>
  );
};

export default Other;