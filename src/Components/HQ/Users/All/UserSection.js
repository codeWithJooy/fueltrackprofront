import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import Dropdown from "../../../Dropdown/Dropdown";
import AddUserModel from "../../../Models/AddUserModel";
import NotPresent from "../../../NotPresent/NotPresent";
import { getTanks } from "../../../../actions/stockAction";

const UserSection = () => {
  const ownerId=localStorage.getItem("ownerId")
  const [pumpId, setPumpId] = useState("");
  const [userModel, setUserModel] = useState(false);
  const [tanks, setTanks] = useState([]);
  const openModel = () => {
    setUserModel(true);
  };
  useEffect(() => {
    if (userModel) return;
    (async () => {
      let data = await getTanks(ownerId, pumpId);
      setTanks(data);
    })();
  }, [userModel,pumpId]);
  return (
    <div className="pageSection">
      <Dropdown pumpId={pumpId} setPumpId={setPumpId} />
      <img src="Assets/HQ/add.png" className="addStock" onClick={openModel} />
      {
        tanks.length <1 && <NotPresent />
      }
      {userModel && (
        <AddUserModel
          setUserModel={setUserModel}
          ownerId={ownerId}
          pumpId={pumpId}
        />
      )}
    </div>
  );
};

export default UserSection;