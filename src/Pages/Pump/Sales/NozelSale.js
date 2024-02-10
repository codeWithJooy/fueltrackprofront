import React, { useEffect, useState } from "react";
import "../Party/Party.css";
import AddNozelSalesModel from "../../../Components/Models/PumpModel/AddNozelSalesModel";
import { getNozelByPumpId, getPumpNozelSale } from "../../../actions/pumpAction/salesAction";
import moment from 'moment';

const NozelSale = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [nozels,setNozels]=useState([])
  const [sale,setSale]=useState([])
  const [nozelSalesModel,setNozelSalesModel]=useState(false)

  let pumpId=localStorage.getItem("pumpId")
  
  const [searchData,setSearchData]=useState({
    nozel:"All",
    date:moment().format('YYYY-MM-DD')
  })

  useEffect(()=>{
    (async()=>{
      let nozelsData=await getNozelByPumpId(pumpId)
      setNozels(nozelsData)
    })()
  },[nozelSalesModel])
  useEffect(()=>{
    (async()=>{
      let nozelData=await getPumpNozelSale(pumpId)
      setSale(nozelData)
    })()
  },[nozelSalesModel])
  return (
    <div className="partyContent">
        <img src="Assets/HQ/add.png" className="addStock"  onClick={()=>{setNozelSalesModel(true)}}/>
      <div className="partyDropdowns">
        <div className="partyDropdownContainers">
          <div className="dropContainer">
            <select>
              <option>All</option>
              {
                 nozels.map((data,item)=>(
                  <option>{data.nozelName}</option>
                 ))
              }
            </select>
          </div>
          <div className="dropContainer">
            <input type="date" value={searchData.date}/>
          </div>
        </div>
      </div>
     {
      sale && sale.map((data,index)=>(
        <div className="partyCard">
        <div className="partyCardRow">
          <div className="partyName">
            <p>{data.nozelName}</p>
          </div>
          <div className="partyDetailsCardUnit">
            <p>Opening:{data.openingMeter}</p>
          </div>
          <div className="partyDetailsCardUnit">
            <p>Closing:{data.closingMeter}</p>
          </div>
          <div className="partDetailsCardUnitDrop">
            <img
              src={
                `${isOpen}` == true ? "Assets/HQ/up.png" : "Assets/HQ/down.png"
              }
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>
        </div>
        {isOpen && (
          <>
            <div className="partyCardRow">
              <div className="partyDetailsCardUnit">
                <p>Testing:{data.testing}</p>
              </div>
              <div className="partyDetailsCardUnit">
                <p>Add. In:{data.additionalIn}</p>
              </div>
              <div className="partyDetailsCardUnit">
                <p>Add. Out:{data.additionalOut}</p>
              </div>
              <div className="partyDetailsCardUnit">
                <p>Net Sales:{data.netSales}</p>
              </div>
            </div>
          </>
        )}
      </div>
      ))
     }
      { nozelSalesModel && <AddNozelSalesModel setNozelSalesModel={setNozelSalesModel}/>}
    </div>
  );
};

export default NozelSale;
