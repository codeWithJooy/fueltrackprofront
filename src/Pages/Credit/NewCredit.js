import React from "react";

const NewCredit = () => {
  return (
    <div className="dataContainer">
      <div className="dataDiv">
        <div className="cashInput">
          <label>Party Name</label>
          <select>
            <option>Hemant</option>
            <option>Abhi</option>
            <option>Party 3</option>
            <option>Party 4</option>
          </select>
        </div>
        <div className="cashInput">
          <label>Vehicle Number</label>
          <input />
        </div>
      </div>
      <div className="dataDiv">
        <div className="cashInput">
          <label>Product</label>
          <select>
            <option>HSD</option>
            <option>MS</option>
          </select>
        </div>
        <div className="cashInput">
          <label>Quantity</label>
          <input />
        </div>
      </div>
      <div className="dataDiv">
        <div className="cashInput">
          <label>Amount</label>
          <input />
        </div>
        <div className="cashInput">
          <label>Round Off</label>
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
