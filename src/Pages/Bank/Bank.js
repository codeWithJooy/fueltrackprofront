import React, { useEffect, useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Header from "../../Components/Header/Header";
import BankForm from "./BankForm";
import BankList from "./BankList";

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
          {
            toggle=="add" && 
            <BankForm />
          }
          {
           toggle=="party" && 
           <BankList />
          }
        </div>
      </div>
    </div>
  );
};

export default Bank;
