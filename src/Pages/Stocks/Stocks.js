import React,{useState} from "react"
import Sidebar from "../../Components/Sidebar/Sidebar";
import Header from "../../Components/Header/Header";

const Stocks = () => {
  const [toggle, setToggle] = useState("add");
  const handleToggle = (value) => {
    setToggle(value);
  };
  return (
    <div className="main">
      <Sidebar page={"Stocks"}/>
      <div className="page">
        <Header title={"Stocks Section"} />

        <div className="cashMain">
        <div className="toggleSection">
            <div className="toggleContainer">
              <button
                className={`formButton ${
                  toggle === "add" ? "toggleActive" : ""
                }`}
                onClick={() => handleToggle("add")}
              >
                Add Stock
              </button>
              <button
                className={`listButton ${
                  toggle === "party" ? "toggleActive" : ""
                }`}
                onClick={() => handleToggle("party")}
              >
                Stock List
              </button>
            </div>
          </div>
          <div className="dataContainer">
            <div className="dataDiv">
              <div className="cashInput">
                <label>Stock</label>
                <input />
              </div>
              <div className="cashInput">
                <label>Opening Stock</label>
                <input />
              </div>
            </div>
            <div className="dataDiv">
              <div className="cashInput">
                <label>Received</label>
                <input />
              </div>
              <div className="cashInput">
                <label>Net Sales</label>
                <input />
              </div>
            </div>
            <div className="dataDiv">
              <div className="cashInput">
                <label>Closing Stock</label>
                <input />
              </div>
            </div>
            <div className="buttonSection">
              <button className="addButton">
                Add
              </button>
              <button className="resetButton">
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stocks;