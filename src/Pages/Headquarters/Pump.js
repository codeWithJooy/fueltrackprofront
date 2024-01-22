import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import SidebarHQ from "../../Components/Sidebar/SidebarHQ";
import "./css/Pumps.css";
import { getAllPumps } from "../../actions/pumpAction";
import PumpHeader from "../../Components/Header/HQ/Pumps/PumpHeader";
import NotPresent from "../../Components/NotPresent/NotPresent";
import AddPumpModel from "../../Components/Models/AddPumpModel";

const Pump = () => {
  const { ownerId } = useSelector((state) => state.user);
  const [pumps, setPumps] = useState([]);
  const [pumpModel, setPumpModel] = useState(false);
  const [activeItem, setActiveItem] = useState("All Pumps");
  const [flex, setFlex] = useState(true);

  const openModel=()=>{
    setPumpModel(true)
  }
  useEffect(() => {
    if (pumpModel) return;
    (async () => {
      let data = await getAllPumps(ownerId);
      setPumps(data);
    })();
  }, [pumpModel]);
  return (
    <div className="main">
      <SidebarHQ page={"Pumps"} />
      <div className="page">
        <PumpHeader activeItem={activeItem} setActiveItem={setActiveItem} />
        <div className="pageSection">
          <img src="Assets/HQ/add.png" className="addStock" onClick={openModel}/>
          {pumps.length < 1 && <NotPresent text={"No Pumps Added"} />}
          {pumps.length >= 1 && (
            <table>
              <thead style={{ background: "#19363C", color: "white" }}>
                <tr>
                  <th>Pump Name</th>
                  <th>Plot</th>
                  <th>City</th>
                  <th>State</th>
                  <th>Owner</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {pumps.map((pump) => (
                  <tr key={pump._id}>
                    <td onClick={() => alert("Hi")}>{pump.name}</td>
                    <td>{pump.plotNo}</td>
                    <td>{pump.city}</td>
                    <td>{pump.state}</td>
                    <td>{pump.owner}</td>
                    <td>{"Active"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          {pumpModel && (
            <AddPumpModel setPumpModel={setPumpModel} ownerId={ownerId} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Pump;
