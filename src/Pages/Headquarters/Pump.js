import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import SidebarHQ from "../../Components/Sidebar/SidebarHQ";
import "./css/Pumps.css";
import { getAllPumps } from "../../actions/pumpAction";
import PumpHeader from "../../Components/Header/HQ/Pumps/PumpHeader";
import NotPresent from "../../Components/NotPresent/NotPresent";
import AddPumpModel from "../../Components/Models/AddPumpModel";
import PumpCard from "../../Components/Cards/PumpCard";

const Pump = () => {
  const ownerId=localStorage.getItem("ownerId")
  const [pumps, setPumps] = useState([]);
  const [pumpModel, setPumpModel] = useState(false);
  const [activeItem, setActiveItem] = useState("All Pumps");
  const [showSidebar, setShowSidebar] = useState(true);
  const [flex, setFlex] = useState(true);

  const openModel = () => {
    setPumpModel(true);
  };
  useEffect(() => {
    if (pumpModel) return;
    (async () => {
      let data = await getAllPumps(ownerId);
      setPumps(data);
    })();
  }, [pumpModel]);

  useEffect(() => {
    const handleResize = () => {
      setShowSidebar(window.innerWidth > 768); // Adjust the threshold as needed
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="main">
      {showSidebar && (
        <SidebarHQ page={"Pumps"} setShowSidebar={setShowSidebar} />
      )}

      <div className="page">
        <PumpHeader
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          setShowSidebar={setShowSidebar}
        />
        <div className="pageSection">
          <img
            src="Assets/HQ/add.png"
            className="addStock"
            onClick={openModel}
          />
          {pumps.length < 1 && <NotPresent text={"No Pumps Added"} />}

          <div className="cardHolder">

             {
              pumps.map((data,key)=>(
                <PumpCard 
                  key={data._id}
                  id={data._id}
                  name={data.name}
                  owner={data.owner}
                  street={data.street}
                  city={data.city}
                  state={data.state}
                  />
              ))
             }
          </div>
          {pumpModel && (
            <AddPumpModel setPumpModel={setPumpModel} ownerId={ownerId} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Pump;
