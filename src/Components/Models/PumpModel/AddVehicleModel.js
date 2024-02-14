import React, { useEffect, useState } from "react";
import { getPartyName,addPartyVehicle } from "../../../actions/pumpAction/partyAction";
import "../Model.css";

const AddVehicleModel = ({ setVehicleModel = "" }) => {
  const [data, setData] = useState({
    pumpId: localStorage.getItem("pumpId"),
    partyId: "",
    partyName: "",
    vehicleNo: "",
  });
  const [party, setParty] = useState([]);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleVehicleAdd = () => {
    (async()=>{
      console.log(data)
      if(await addPartyVehicle(data)){
        setVehicleModel(false)
      }
    })()
  };
  const handlePartyChange = (e) => {
    (async () => {
      const selectedIndex = e.target.selectedIndex;
      const partyName = e.target.options[selectedIndex].text;
      setData({
        ...data,
        partyId: e.target.value,
        partyName: partyName,
     
      });
    })();
  };
  useState(() => {
    (async () => {
      let partyData = await getPartyName(data.pumpId);
      setParty(partyData);
      setData({
        ...data,
        partyId: partyData._id,
        partyName: partyData.partyName,
      });
    })();
  }, []);

  return (
    <div className="modelContainer">
      <div className="modelCard">
        <img
          src="Assets/HQ/close.png"
          className="closeModel"
          onClick={() => setVehicleModel(false)}
        />
        <div className="modelTitle">
          <p>Add Party Vehicle</p>
          <p>Add New Party</p>
        </div>
        <div className="modelInputContainer">
          <div className="modelHalf">
            <label>Party Name</label>
            <select onChange={handlePartyChange}>
              <option>Select Party</option>
              {
                party && party.map((data)=>(
                  <option value={data._id}>{data.partyName}</option>
                ))
              }
            </select>
          </div>
          <div className="modelHalf">
            <label>Vehicle No.</label>
            <input type="text" name="vehicleNo" value={data.vehicleNo} onChange={handleChange} />
          </div>
        </div>
        <div className="modelInputContainer">
          <button className="addModel" onClick={handleVehicleAdd}>
            {" "}
            Add Vehicle
          </button>
          <button
            className="cancelModel"
            onClick={() => setVehicleModel(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddVehicleModel;
