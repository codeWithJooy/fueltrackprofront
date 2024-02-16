import React, { useEffect, useState } from "react";
import "../Model.css";
import moment from "moment";
import { addPumpExpenditure, getExpenditureType } from "../../../actions/pumpAction/expenditureAction";

const AddExpenditureModel = ({ setExpenditureModel = "" }) => {
  const [data, setData] = useState({
    pumpId: localStorage.getItem("pumpId"),
    date: moment().format("YYYY-MM-DD"),
    expenditureType: "",
    details: "",
    amount: "",
  });
  let [type,setType]=useState([])

  useEffect(()=>{
    (async()=>{
      let dat=await getExpenditureType({pumpId:data.pumpId})
      setType(dat)
    })()
  },[])

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSelect = (e) => {
    setData({ ...data, expenditureType: e.target.value });
  };
  const handlePumpAdd = () => {
    (async()=>{
      if(await addPumpExpenditure(data)){
        setExpenditureModel(false)
      }
    })()
  };

  return (
    <div className="modelContainer">
      <div className="modelCard">
        <img
          src="Assets/HQ/close.png"
          className="closeModel"
          onClick={() => setExpenditureModel(false)}
        />
        <div className="modelTitle">
          <p>Add Expenditure</p>
        </div>
        <div className="modelInputContainer">
          <div className="modelHalf">
            <label>Date</label>
            <input type="date" name="date" value={data.date} />
          </div>
          <div className="modelHalf">
            <label>Expenditure Type</label>
            <select onChange={handleSelect}>
              <option>Select Type</option>
              {
                type && type.map((data)=>(
                 <option>{data.expenditureType}</option>
                ))
              }
              
            </select>
          </div>
        </div>
        <div className="modelInputContainer">
          <div className="modelHalf">
            <label>Details</label>
            <input type="text" name="details" value={data.details} onChange={handleChange}/>
          </div>
          <div className="modelHalf">
            <label>Amount</label>
            <input type="number" name="amount" value={data.amount} onChange={handleChange}/>
          </div>
        </div>

        <div className="modelInputContainer">
          <button className="addModel" onClick={handlePumpAdd}>
            {" "}
            Add 
          </button>
          <button
            className="cancelModel"
            onClick={() => setExpenditureModel(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddExpenditureModel;
