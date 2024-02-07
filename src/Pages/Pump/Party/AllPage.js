import React,{useState} from 'react'
import AddPartySalesModel from '../../../Components/Models/PumpModel/AddPartySalesModel'
const AllPage=()=>{
    const [partySalesModel,setPartySalesModel]=useState(false)
    return(
        <div className="partyContent">
        <img src="Assets/HQ/add.png" className="addStock"  onClick={()=>setPartySalesModel(true)}/>
          <div className="partyDropdowns">
            <div className="partyDropdownContainers">
              <div className="dropContainer">
                <select>
                  <option>Party1</option>
                  <option>Party1</option>
                </select>
              </div>
              <div className="dropContainer">
                <select>
                  <option>Sales Ledger 1</option>
                  <ption>Sales Ledger 2</ption>
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
            partySalesModel && 
            <AddPartySalesModel 
              setPartySalesModel={setPartySalesModel}
            />
          }
        </div>
    )
}

export default AllPage;