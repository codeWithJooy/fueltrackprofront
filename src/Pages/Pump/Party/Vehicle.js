import React,{useState} from 'react'
import AddVehicleModel from '../../../Components/Models/PumpModel/AddVehicleModel'
const Vehicle=()=>{
    const [vehicleModel,setVehicleModel]=useState(false)
    return(
        <div className="partyContent">
        <img src="Assets/HQ/add.png" className="addStock"  onClick={()=>setVehicleModel(true)}/>
          <div className="partyDropdowns">
            <div className="partyDropdownContainers">
              <div className="dropContainer">
                <select>
                  <option>Vehicle 1</option>
                  <option>Vehicle 2</option>
                </select>
              </div>
              <div className="dropContainer">
                <input type="date" />
              </div>
            </div>
          </div>
          <div className="partyCardHolder">
            <div className="partyCard">
              <div className="partyDetails">
                <div className="partyName">
                  <p>Abhi</p>
                </div>
                <div className="partyCardUnit">
                  <p>Vehicle</p>
                </div>
                <div className="partyCardUnit">
                  <p>Item</p>
                </div>
                <div className="partyCardUnit">
                  <p>Ledger</p>
                </div>
              </div>
              <div className="partyDetails">
                <div className="partyName">
                  <p>Abhi</p>
                </div>
                <div className="partyCardUnit">
                  <p>Vehicle</p>
                </div>
                <div className="partyCardUnit">
                  <p>Item</p>
                </div>
                <div className="partyCardUnit">
                  <p>Ledger</p>
                </div>
              </div>
            </div>
          </div>
          {
            vehicleModel && 
            <AddVehicleModel setVehicleModel={setVehicleModel} />
            
          }
        </div>
    )
}

export default Vehicle;