import React, { useEffect, useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Header from "../../Components/Header/Header";

const Bank = () => {
  const [currentDate, setCurrentDate] = useState("");
  const [toggle, setToggle] = useState("add");
  const handleToggle = (value) => {
    setToggle(value);
  };
  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    setCurrentDate(today);
  }, []);

  const handleDateChange = (event) => {
    
    const newDate = event.target.value;
    setCurrentDate(newDate);
  };

  return (
    <div className="main">
      <Sidebar page={"Bank"} />
      <div className="page">
        <Header title={"Bank Transactions"} />

        <div className="cashMain">
          <div className="toggleSection">
            <div className="toggleContainer">
              <button
                className={`formButton ${
                  toggle === "add" ? "toggleActive" : ""
                }`}
                onClick={() => handleToggle("add")}
              >
                New Transaction
              </button>
              <button
                className={`listButton ${
                  toggle === "party" ? "toggleActive" : ""
                }`}
                onClick={() => handleToggle("party")}
              >
                Transaction List
              </button>
            </div>
          </div>
          <div className="dataContainer">
            <div className="dataDiv">
              <div className="cashInput">
                <label>Type</label>
                <select>
                  <option>Gpay</option>
                  <option>PhonePe</option>
                  <option>PayTm</option>
                  <option>Card</option>
                </select>
              </div>
              <div className="cashInput">
                <label>Date</label>
                <input
                  type="date"
                  value={currentDate}
                  onChange={handleDateChange}
                />
              </div>
            </div>
            <div className="dataDiv">
              <div className="cashInput">
                <label>Amount</label>
                <input />
              </div>
            </div>
            <div className="buttonSection">
              <button className="addButton">Add</button>
              <button className="resetButton">Reset</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bank;
