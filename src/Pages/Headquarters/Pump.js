import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import SidebarHQ from "../../Components/Sidebar/SidebarHQ";
import Header from "../../Components/Header/Header";
import "./css/Pumps.css";
import { getAllPumps } from "../../actions/pumpAction";
import PumpHeader from "../../Components/Header/HQ/Pumps/PumpHeader";

const Pump = () => {
  const { ownerId } = useSelector((state) => state.user);
  const [pumps, setPumps] = useState([]);
  const [activeItem,setActiveItem]=useState("All Pumps")
  const [flex, setFlex] = useState(true);
  useEffect(() => {
    if (!flex) return;
    (async () => {
      let data = await getAllPumps(ownerId);
      setPumps(data);
    })();
  }, []);
  return (
    <div className="main">
      <SidebarHQ page={"Pumps"} />
      <div className="page">
        <PumpHeader activeItem={activeItem} setActiveItem={setActiveItem}/>
        <div className="cashMain">
          <div className="pumpContainer">
            {pumps &&
              pumps.length > 0 &&
              pumps.map((data,index) => (
                <div className="pumpCard" key={index}>
                  <div className="pumpImg">
                    <img src="Assets/HQ/placeholder.png" />
                  </div>
                  <div className="pumpDetails">
                    <div className="pumpName">
                      <p>{data.name}</p>
                    </div>
                    <div className="pumpPlot">
                      <p>{data.plotNo}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pump;
