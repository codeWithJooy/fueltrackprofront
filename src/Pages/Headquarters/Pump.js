import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import SidebarHQ from "../../Components/Sidebar/SidebarHQ";
import Header from "../../Components/Header/Header";
import "./css/Pumps.css";
import { getAllPumps } from "../../actions/pumpAction";

const Pump = () => {
  const { ownerId } = useSelector((state) => state.user);
  const [pumps, setPumps] = useState([]);
  const [toggle, setToggle] = useState("add");
  const [flex, setFlex] = useState(true);
  const handleToggle = (value) => {
    setToggle(value);
  };
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
        <Header title={"Pumps Section"} />
        <div className="cashMain">
          <div className="toggleSection">
            <div className="toggleContainer">
              <button
                className={`formButton ${
                  toggle === "add" ? "toggleActive" : ""
                }`}
                onClick={() => handleToggle("add")}
              >
                Pumps
              </button>
              <button
                className={`listButton ${
                  toggle === "party" ? "toggleActive" : ""
                }`}
                onClick={() => handleToggle("party")}
              >
                Add Pump
              </button>
            </div>
          </div>
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
