import React, { useEffect, useState } from "react";
import "../Party/Party.css";
import {
  getNozelByPumpId,
  getPumpNozelSale,
} from "../../../actions/pumpAction/salesAction";
import moment from "moment";
import AddPurchaseModel from "../../../Components/Models/PumpModel/AddPurchaseModel";
import { getPumpPurchase, getPumpPurchaseRange } from "../../../actions/pumpAction/purchaseAction";
import { ItemData } from "../../../Data/Items";

const AllPurchaseRange = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [nozels, setNozels] = useState([]);
  const [sale, setSale] = useState([]);
  const [purchaseModel, setPurchaseModel] = useState(false);
  const [purchase,setPurchase]=useState([])

  let pumpId = localStorage.getItem("pumpId");

  const [searchData, setSearchData] = useState({
    pumpId: localStorage.getItem("pumpId"),
    initialDate: moment().format("YYYY-MM-DD"),
    finalDate:moment().format('YYYY-MM-DD'),
    status:"Pending",
    itemName:"",
  });

  const handleFinalDate=(e)=>{
    setSearchData({...searchData,finalDate: moment().format(e.target.value)})
  }
  const handleInitialDate=(e)=>{
    setSearchData({...searchData,initialDate: moment().format(e.target.value)})
  }
  
  const handleItem=(e)=>{
    setSearchData({...searchData,itemName:e.target.value})
  }
  const handleStatus=(e)=>{
    setSearchData({...searchData,status:e.target.value})
  }
 
  useEffect(() => {
    (async () => {
      let purchaseData = await getPumpPurchaseRange(searchData)
      setPurchase(purchaseData)
    })();
  }, [purchaseModel,searchData]);

  return (
    <div className="partyContent">
      <img
        src="Assets/HQ/add.png"
        className="addStock"
        onClick={() => {
          setPurchaseModel(true);
        }}
      />
      <div className="partyDropdowns">
        <div className="partyDropdownContainers">
        <div className="dropContainer">
            <select onChange={handleItem}>
              <option value="">All Items</option>
              {
                ItemData && ItemData.map((data)=>(
                  <option>{data.symbol}</option>
                ))
              }
            </select>
          </div>
          <div className="dropContainer">
            <select onChange={handleStatus}>
              <option value="Pending">Pending</option>
              <option value="Approved">Approved</option>
              <option value="Rejected">Rejected</option>
            </select>
          </div>
          <div className="dropContainer">
            <input type="date" value={searchData.initialDate} onChange={handleInitialDate}/>
          </div>
          <div className="dropContainer">
            <input type="date" value={searchData.finalDate} onChange={handleFinalDate}/>
          </div>
        </div>
      </div>
      {purchase &&
        purchase.map((data, index) => (
          <div className="partyCard">
            <div className="partyCardRow">
              <div className="partyName">
                <p>{data.supplierName}</p>
              </div>
              <div className="partyDetailsCardUnit">
                <p>Item:{data.itemName}</p>
              </div>
              <div className="partyDetailsCardUnit">
                <p>Quantity:{data.qty}</p>
              </div>
              <div className="partDetailsCardUnitDrop">
                <img
                  src={
                    `${isOpen}` == true
                      ? "Assets/HQ/up.png"
                      : "Assets/HQ/down.png"
                  }
                  onClick={() => setIsOpen(!isOpen)}
                />
              </div>
            </div>
          </div>
        ))}
      {purchaseModel && (
        <AddPurchaseModel setPurchaseModel={setPurchaseModel} />
      )}
    </div>
  );
};

export default AllPurchaseRange;