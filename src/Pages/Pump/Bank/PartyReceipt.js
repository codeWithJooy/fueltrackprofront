import React, { useEffect, useState } from "react";
import "../Party/Party.css";
import { getPartyReceipt } from "../../../actions/pumpAction/partyAction";
import { getPartyName } from "../../../actions/pumpAction/partyAction";
import moment from "moment";
import AddNozelSaleFinal from "../../../Components/Models/PumpModel/AddNozelSaleFinal";
import AddPartyReceiptModel from "../../../Components/Models/PumpModel/AddPartyReceiptModel";

const PartyReceipt = () => {
  const [partyReceiptModel,setPartyReceiptModel]=useState(false)
  const [partyName, setPartyName] = useState([]);
  const [receipt,setReceipt]=useState([])
  let pumpId = localStorage.getItem("pumpId");

  const [searchData, setSearchData] = useState({
    pumpId:localStorage.getItem("pumpId"),
    date: moment().format("YYYY-MM-DD"),
    partyName:"",
  });
  
   const handleDate=(e)=>{
     setSearchData({...searchData,date:moment().format(e.target.value)})
   }
  const handleMpd=(e)=>{
    setSearchData({...searchData,mpd:e.target.value})
  }
  const handleStatus=(e)=>{
    setSearchData({...searchData,status:e.target.value})
  }
 

  useEffect(() => {
    (
     async () => {
       let name = await getPartyName(localStorage.getItem("pumpId"));
       setPartyName(name);
     }
    )()
   }, []);

   useEffect(()=>{
    (async()=>{
      let receiptData=await getPartyReceipt(searchData)
      console.log(receiptData)
      setReceipt(receiptData)
    })()
   },[searchData])

  return (
    <div className="partyContent">
      <img
        src="Assets/HQ/add.png"
        className="addStock"
        onClick={() => {
          setPartyReceiptModel(true);
        }}
      />
      <div className="partyDropdowns">
        <div className="partyDropdownContainers">

          <div className="dropContainer">
            <select>
              <option value="">All Party</option>
              {partyName && partyName.map((data) => <option>{data.partyName}</option>)}
            </select>
          </div>
          <div className="dropContainer">
            <input type="date" value={searchData.date} onChange={handleDate}/>
          </div>
        </div>

      </div>
      {receipt  &&
          receipt.map(
            (data) =>(
              <> <div className="partyCard">
                <div className="partyCardRow">
                  <div className="partyName">
                    <p>{data.partyName}</p>
                  </div>
                  <div className="partyDetailsCardUnit">
                    <p>Rs {data.amount}</p>
                  </div>
                  <div className="partyDetailsCardUnit">
                    <p>{data.date}</p>
                  </div>
                </div> </div>
              </>
            )
          )}
      {partyReceiptModel && (
        <AddPartyReceiptModel setPartyReceiptModel={setPartyReceiptModel} />
      )}
    </div>
  );
};

export default PartyReceipt;