import React,{useState} from "react"
import Sidebar from "../../Components/Sidebar/Sidebar";
import Header from "../../Components/Header/Header";
import NewCredit from "./NewCredit";
import PartyList from "./PartyList";

const Credit = () => {
  const [toggle,setToggle]=useState("add")
  const handleToggle = (value) => {
    setToggle(value);
  };

  return (
    <div className="main">
      <Sidebar page={"Credit"}/>
      <div className="page">
        <Header title={"Credit Section"} />

        <div className="cashMain">
          <div className="toggleSection">
            <div className="toggleContainer">
              <button
                className={`formButton ${toggle === "add" ? "toggleActive" : ""}`}
                onClick={() => handleToggle("add")}
              >
                Add Credit
              </button>
              <button
                className={`listButton ${toggle === "party" ? "toggleActive" : ""}`}
                onClick={() => handleToggle("party")}
              >
                Party
              </button>
            </div>
          </div>
          {
            toggle=="add" && 
            <NewCredit />
          }
          {
            toggle=="party" &&
            <PartyList />
          }
        </div>
      </div>
    </div>
  );
};

export default Credit;