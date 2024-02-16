import React, { useEffect, useState } from "react";
import AddVehicleModel from "../../../Components/Models/PumpModel/AddVehicleModel";
import {
  getPartyName,
  getPartyVehicle,
  getPartySales,
} from "../../../actions/pumpAction/partyAction";
import moment from "moment";

const Vehicle = () => {
  const [vehicleModel, setVehicleModel] = useState(false);
  const [partyName, setPartyName] = useState([]);
  const [partyData, setPartyData] = useState([]);
  const [partyVehicle, setPartyVehicle] = useState([]);

  const [search, setSearch] = useState({
    pumpId: localStorage.getItem("pumpId"),
    partyName: "",
    date: moment().format("YYYY-MM-DD"),
    vehicle: "",
  });

  const handlePartyName = (e) => {
    setSearch({ ...search, partyName: e.target.value });
  };

  const handleDateChange = (e) => {
    setSearch({ ...search, date: moment().format(e.target.value) });
  };
  const vehicleChange=(e)=>{
    setSearch({...search,vehicle:e.target.value})
  }
  useEffect(() => {
    (async () => {
      let name = await getPartyName(localStorage.getItem("pumpId"));
      setPartyName(name);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      let vehicles = await getPartyVehicle(search);
      setPartyVehicle(vehicles);
    })();
  }, [search.partyName]);

  
    useEffect(() => {
      (async () => {
        let party = await getPartySales(search);
        setPartyData(party);
      })();
    }, [search]);
 

  return (
    <div className="partyContent">
      <img
        src="Assets/HQ/add.png"
        className="addStock"
        onClick={() => setVehicleModel(true)}
      />
      <div className="partyDropdowns">
        <div className="partyDropdownContainers">
          <div className="dropContainer">
            <select onChange={handlePartyName}>
              <option>All Party</option>
              {partyName &&
                partyName.map((data) => <option>{data.partyName}</option>)}
            </select>
          </div>
          <div className="dropContainer">
            <select onChange={vehicleChange}>
              <option>Select Vehicle</option>
              {partyVehicle &&
                partyVehicle.map((data) => <option>{data.vehicleNo}</option>)}
            </select>
          </div>
          <div className="dropContainer">
            <input type="date" name="date" value={search.date} onChange={handleDateChange}/>
          </div>
        </div>
      </div>
      <div className="partyCardHolder">
        {partyData &&
          partyData.map((unit) => (
            <>
              <div className="partyCard">
                <div className="partyDetails">
                  <div className="partyName">
                    <p>{unit.partyName}</p>
                  </div>
                  <div className="partyCardUnit">
                    <p>{unit.vehicle}</p>
                  </div>
                  <div className="partyCardUnit">
                    <p>{unit.item}</p>
                  </div>
                  <div className="partyCardUnit">
                    <p>{unit.salesLedger}</p>
                  </div>
                </div>
                <div className="partyDetails">
                  <div className="partyName">
                    <p>Quantity:{unit.qty}</p>
                  </div>
                  <div className="partyCardUnit">
                    <p>Rate:{unit.rate}</p>
                  </div>
                  <div className="partyCardUnit">
                    <p>Amount:{unit.amount}</p>
                  </div>
                  <div className="partyCardUnit">
                    <p>{unit.status}</p>
                  </div>
                </div>
              </div>
            </>
          ))}
      </div>
      {vehicleModel && <AddVehicleModel setVehicleModel={setVehicleModel} />}
    </div>
  );
};

export default Vehicle;
