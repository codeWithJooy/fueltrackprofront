import React from 'react'

const CashForm=()=>{
    return(
        <div className="dataContainer">
        <div className="dataDiv">
          <div className="cashInput">
            <label>Nozel</label>
            <select>
              <option>MS1</option>
              <option>MS2</option>
              <option>MS3</option>
              <option>MS4</option>
              <option>HSD1</option>
              <option>HSD2</option>
              <option>HSD3</option>
              <option>HSD4</option>
              <option>HSD5</option>
              <option>HSD6</option>
              <option>HSD7</option>
              <option>HSD8</option>

            </select>
          </div>
          <div className="cashInput">
            <label>Opening Reading</label>
            <input />
          </div>
        </div>
        <div className="dataDiv">
          <div className="cashInput">
            <label>Sales</label>
            <input />
          </div>
          <div className="cashInput">
            <label>R/F Tesing</label>
            <input />
          </div>
        </div>
        <div className="dataDiv">
          <div className="cashInput">
            <label>Sales</label>
            <input />
          </div>
        </div>
        <div className="dataDiv">
          <div className="cashInput">
            <label>Net Sales</label>
            <input />
          </div>
          <div className="cashInput">
            <label>Closing Meter</label>
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
    )
}

export default CashForm;