import React from "react";

const NewCredit = () => {
  return (
    <div className="dataContainer">
      <div className="dataDiv">
        <div className="cashInput">
          <label>Party</label>
          <input />
        </div>
        <div className="cashInput">
          <label>Opening Balance</label>
          <input />
        </div>
      </div>
      <div className="dataDiv">
        <div className="cashInput">
          <label>New Credit</label>
          <input />
        </div>
        <div className="cashInput">
          <label>Received</label>
          <input />
        </div>
      </div>
      <div className="dataDiv">
        <div className="cashInput">
          <label>Details</label>
          <input />
        </div>
        <div className="cashInput">
          <label>Closing Balance</label>
          <input />
        </div>
      </div>
      <div className="buttonSection">
        <button className="addButton">Done</button>
        <button className="resetButton">Reset</button>
      </div>
    </div>
  );
};

export default NewCredit;
