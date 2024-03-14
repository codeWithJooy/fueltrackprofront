import React, { useEffect, useState } from "react";
import "../Model.css";
import { ItemData } from "../../../Data/Items";
import {
    addPartyReceipt,
  addPartySales,
  getPartyName,
  getPartyVehicle,
} from "../../../actions/pumpAction/partyAction";
import moment from "moment";
import { getItem,getOneItemRate } from "../../../actions/setupActions";

const AddPartyReceiptModel = ({ setPartyReceiptModel = "", ownerId = "" }) => {
  const [partyData, setPartyData] = useState([]);
  const [vehicle, setVehicle] = useState([]);
  const [items,setItems]=useState([])

  const [data, setData] = useState({
    pumpId: localStorage.getItem("pumpId"),
    partyId: localStorage.getItem("pumpId"),
    partyName: "",
    date: moment().format("YYYY-MM-DD"),
    amount: "0",
  });
  const handleParty = (e) => {
    setData({ ...data, partyName: e.target.value });
  };
 
  const handleChangeQuantity = (e) => {
    setData({ ...data, amount: e.target.value});
  };
  const handleDate=(e)=>{
    setData({...data,date:moment().format(e.target.value)})
  }
  useEffect(() => {
    (async () => {
      let party = await getPartyName(data.pumpId);
      setPartyData(party);
    })();
  }, []);

  const handlePartyReceipt = () => {
    (async()=>{
      if(await addPartyReceipt(data)){
        setPartyReceiptModel(false)
      }
    })()
  };

  return (
    <div className="modelContainer">
      <div className="modelCard">
        <img
          src="Assets/HQ/close.png"
          className="closeModel"
          onClick={() => setPartyReceiptModel(false)}
        />
        <div className="modelTitle">
          <p>Add Party Receipt</p>
        </div>
        <div className="modelInputContainer">
          <div className="modelHalf">
            <label>Party Name</label>
            <select onChange={handleParty}>
              <option>Select Party</option>
              {partyData &&
                partyData.map((data) => (
                  <option value={data.partyName}>{data.partyName}</option>
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
            <label>Amount</label>
            <input type="text" name="amount" value={data.amount} onChange={handleChangeQuantity}/>
          </div>
        </div>

        <div className="modelInputContainer">
          <button className="addModel" onClick={handlePartyReceipt}>
            {" "}
            Add Receipt
          </button>
          <button
            className="cancelModel"
            onClick={() => setPartyReceiptModel(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddPartyReceiptModel;