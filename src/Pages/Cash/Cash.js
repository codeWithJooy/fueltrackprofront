import React,{useState} from "react"
import Sidebar from "../../Components/Sidebar/Sidebar";
import Header from "../../Components/Header/Header";
import CashForm from "./CashForm";
import CashList from "./CashList";

const Cash = () => {
  const [toggle, setToggle] = useState("add");
  const handleToggle = (value) => {
    setToggle(value);
  };

  return (
    <div className="main">
      <Sidebar page={"Cash"}/>
      <div className="page">
        <Header title={"Cash Section"} />

        <div className="cashMain">
        <div className="toggleSection">
            <div className="toggleContainer">
              <button
                className={`formButton ${
                  toggle === "add" ? "toggleActive" : ""
                }`}
                onClick={() => handleToggle("add")}
              >
                Add Cash
              </button>
              <button
                className={`listButton ${
                  toggle === "party" ? "toggleActive" : ""
                }`}
                onClick={() => handleToggle("party")}
              >
                Cash List
              </button>
            </div>
          </div>
         {
          toggle == "add" &&
          <CashForm />
         }
         {
          toggle == "party" &&
          <CashList />
         }
        </div>
      </div>
    </div>
  );
};

export default Cash;
