import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import Dropdown from "../../../Dropdown/Dropdown";
import AddNozelModel from "../../../Models/AddNozelModel";
import NotPresent from "../../../NotPresent/NotPresent";
import { getNozels } from "../../../../actions/stockAction";

const Nozels = () => {
  const ownerId=localStorage.getItem("ownerId")
  const [pumpId, setPumpId] = useState("");
  const [nozelModel, setNozelModel] = useState(false);
  const [nozels, setNozels] = useState([]);
  const openModel = () => {
    setNozelModel(true);
  };
  useEffect(() => {
    if (nozelModel) return;
    (async () => {
      let data = await getNozels(ownerId, pumpId);
      setNozels(data ? data : []);
    })();
  }, [nozelModel, pumpId]);
  return (
    <div className="pageSection">
      <Dropdown pumpId={pumpId} setPumpId={setPumpId} />
      <img src="Assets/HQ/add.png" className="addStock" onClick={openModel} />
      {nozels.length < 1 && <NotPresent text={"No Nozel Added"} />}
      {nozels.length >= 1 && (
        <table>
          <thead style={{ background: "#19363C", color: "white" }}>
            <tr>
              <th>Nozel Name</th>
              <th>Mpd</th>
              <th>Tank</th>
              <th>Product</th>
            </tr>
          </thead>
          <tbody>
            {nozels.map((tank) => (
              <tr key={tank._id}>
                <td>{tank.nozelName}</td>
                <td>{tank.mpd}</td>
                <td>{tank.tank}</td>
                <td>{tank.product}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {nozelModel && (
        <AddNozelModel
          setNozelModel={setNozelModel}
          ownerId={ownerId}
          pumpId={pumpId}
        />
      )}
    </div>
  );
};

export default Nozels;
