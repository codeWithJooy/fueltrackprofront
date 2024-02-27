import React, { useEffect, useState } from "react";
import "../Model.css";
import {
  addNozelReading,
  getNozelByPumpId,
  getPumpNozelClosingMeter,
} from "../../../actions/pumpAction/salesAction";
import moment from "moment";

const AddNozelSalesModel = ({ setNozelSalesModel = "" }) => {
  const [data, setData] = useState({
    pumpId: localStorage.getItem("pumpId"),
    nozelId: "",
    nozelName:"",
    date: moment().format("YYYY-MM-DD"),
    product: "",
    openingMeter: "",
    closingMeter: "",
    testing: "",
    additionalOut: "",
    additionalIn: "",
    netSales: "",
    salesDsr: "",
    salesDiff: "",
  });
  const [nozel, setNozel] = useState([]);
  const handleNozelChange = (e) => {
    (async () => {
      const selectedIndex = e.target.selectedIndex;
      const nozelName = e.target.options[selectedIndex].text;
      const newReading = await getPumpNozelClosingMeter(
        data.pumpId,
        e.target.value
      );
      setData({
        ...data,
        openingMeter: newReading.closingMeter,
        nozelId: e.target.value,
        nozelName:nozelName,
      });
    })();
  };
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleClosingChange=(e)=>{
    const closingMeter = parseFloat(e.target.value);
    const openingMeter=parseFloat(data.openingMeter)
    const testing=data.testing?parseFloat(data.testing):0;
    const additionalOut=data.additionalOut?parseFloat(data.additionalOut):0;
    const additionalIn=data.additionalIn?parseFloat(data.additionalIn):0;

    let netSales=closingMeter-openingMeter-testing-additionalOut+additionalIn
    setData({...data,closingMeter:closingMeter,netSales:netSales})
  }

  const handleTesting=(e)=>{
    const testing = parseFloat(e.target.value);
    const openingMeter=parseFloat(data.openingMeter)
    const closingMeter=data.closingMeter?parseFloat(data.closingMeter):0;
    const additionalOut=data.additionalOut?parseFloat(data.additionalOut):0;
    const additionalIn=data.additionalIn?parseFloat(data.additionalIn):0;

    let netSales=closingMeter-openingMeter-testing-additionalOut+additionalIn
    setData({...data,testing:testing,netSales:netSales})
  }
  const handleAdditionaOut=(e)=>{
    const additionalOut = parseFloat(e.target.value);
    const openingMeter=parseFloat(data.openingMeter)
    const closingMeter=data.closingMeter?parseFloat(data.closingMeter):0;
    const testing=data.testing?parseFloat(data.testing):0;
    const additionalIn=data.additionalIn?parseFloat(data.additionalIn):0;

    let netSales=closingMeter-openingMeter-testing-additionalOut+additionalIn
    setData({...data,additionalOut:additionalOut,netSales:netSales})
  }
  const handleAdditionaIn=(e)=>{
    const additionalIn = parseFloat(e.target.value);
    const openingMeter=parseFloat(data.openingMeter)
    const closingMeter=data.closingMeter?parseFloat(data.closingMeter):0;
    const additionalOut=data.additionalOut?parseFloat(data.additionalOut):0;
    const testing=data.testing?parseFloat(data.testing):0;

    let netSales=closingMeter-openingMeter-testing-additionalOut+additionalIn
    setData({...data,additionalIn:additionalIn,netSales:netSales})
  }
  const handleSelect = (e) => {
    setData({ ...data, group: e.target.value });
  };
  const handlePumpAdd = () => {
    (async () => {
      let unit = await addNozelReading(data);
      if (unit) {
        setNozelSalesModel(false);
      }
    })();
  };
  const handleDate=(e)=>{
    setData({...data,date:e.target.value})
  }
  useEffect(() => {
    (async () => {
      let nozels = await getNozelByPumpId(data.pumpId);
      setNozel(nozels);
      setData({ ...data, nozelId: nozels[0]._id });
    })();
  }, []);

  useEffect(() => {
    (async () => {
      let nozels = await getNozelByPumpId(data.pumpId);
      let closingMeter = await getPumpNozelClosingMeter(
        data.pumpId,
        nozels[0]._id
      );
      setData({ ...data, openingMeter: closingMeter.closingMeter });
    })();
  }, []);

  return (
    <div className="modelContainer">
      <div className="modelCard">
        <img
          src="Assets/HQ/close.png"
          className="closeModel"
          onClick={() => setNozelSalesModel(false)}
        />
        <div className="modelTitle">
          <p>Add Nozel Sales</p>
        </div>
        <div className="modelInputContainer">
          <div className="modelHalf">
            <label>Nozel</label>
            <select onChange={handleNozelChange}>
              {nozel.map((data, key) => (
                <option value={data._id}>{data.nozelName}</option>
              ))}
            </select>
          </div>
          <div className="modelHalf">
            <label>Date</label>
            <input type="date" name="date" value={data.date} onChange={handleDate}/>
          </div>
        </div>
        <div className="modelInputContainer">
          <div className="modelHalf">
            <label>Opening Meter</label>
            <input
              type="text"
              name="openingMeter"
              value={data.openingMeter}
              readOnly
            />
          </div>
          <div className="modelHalf">
            <label>Closing Meter</label>
            <input
              type="text"
              name="closingMeter"
              value={data.closingMeter}
              onChange={handleClosingChange}
            />
          </div>
        </div>
        <div className="modelInputContainer">
          <div className="modelHalf">
            <label>Testing</label>
            <input
              type="text"
              name="testing"
              value={data.testing}
              onChange={handleTesting}
            />
          </div>
          <div className="modelHalf">
            <label>Additional Out</label>
            <input
              type="text"
              name="additionalOut"
              value={data.additionalOut}
              onChange={handleAdditionaOut}
            />
          </div>
        </div>
        <div className="modelInputContainer">
          <div className="modelHalf">
            <label>Additional In</label>
            <input
              type="text"
              name="additionalIn"
              value={data.additionalIn}
              onChange={handleAdditionaIn}
            />
          </div>
          <div className="modelHalf">
            <label>Net Sales</label>
            <input
              type="text"
              name="netSales"
              value={data.netSales}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="modelInputContainer">
          <button className="addModel" onClick={handlePumpAdd}>
            {" "}
            Add Sale
          </button>
          <button
            className="cancelModel"
            onClick={() => setNozelSalesModel(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddNozelSalesModel;
