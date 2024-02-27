import React,{useEffect, useState} from "react";
import "../NozelSaleModel.css";
import { addNozelReading, getNozelData } from "../../../actions/pumpAction/salesAction";
import moment from "moment";

const AddNozelSaleFinal = ({setNozelSalesModel}) => {
  const [selectedMpd, setSelectedMpd] = useState("");
  const [nozzleData, setNozzleData] = useState([]);
  const [mpdData,setMpdData]=useState([])
  const handleMpdChange = (event) => {
    setSelectedMpd(event.target.value);
    initializeNozzleData(event.target.value);
  };
  const [sellDate,setSellDate]=useState(moment().format("YYYY-MM-DD"))
  const handleDate=(e)=>{
    setSellDate(moment().format(e.target.value))
  }
  const initializeNozzleData = (selectedMpd) => {
    const nozzlesForMpd = mpdData.filter((item) => item.mpd === selectedMpd);
    const initialData = nozzlesForMpd.map((item) => ({
      pumpId:localStorage.getItem("pumpId"),
      mpd:item.mpd,
      nozelName: item.nozelName,
      nozelId:item.nozelId,
      date:moment().format("YYYY-MM-DD"),
      openingMeter:  item.closingMeter,
      rate:item.rate,
      closingMeter:"",
      testing: "0",
      additionalOut: "0",
      additionalIn: "0",
      total:"",
      netSales: "",
      salesDsr: "",
      salesDiff: "",
    }));
    setNozzleData(initialData);
  };
  
  useEffect(()=>{
    (async()=>{
      let dat=await getNozelData( localStorage.getItem("pumpId"))
      setMpdData(dat)
    })()
  },[])
  const handleInputChange = (index, fieldName, value) => {
    const updatedNozzleData = [...nozzleData];
    updatedNozzleData[index][fieldName] = value;
    updatedNozzleData[index].netSales = calculateNetSales(updatedNozzleData[index]);
    updatedNozzleData[index].total=updatedNozzleData[index].netSales * updatedNozzleData[index].rate
    setNozzleData(updatedNozzleData);
  };

  const calculateNetSales = (nozzle) => {
    const { openingMeter, closingMeter, additionalOut, additionalIn, testing } = nozzle;
    const netSales = (parseFloat(closingMeter) - parseFloat(openingMeter)) + parseFloat(additionalIn) - parseFloat(additionalOut) - parseFloat(testing);
    return isNaN(netSales) ? "" : netSales.toFixed(2);
  };
 
  const handleNozel=()=>{
    
    (async()=>{
      console.log(nozzleData)
      if(await addNozelReading(nozzleData,sellDate)){
          setNozelSalesModel(false)
      }
    })()
  }
  const date=moment().format("YYYY-MM-DD")
  return (
    <div className="modelContainer">
      <div className="nozelModel">
        <div className="modelSelector">
          <div className="selectorUnit">
          <select value={selectedMpd} onChange={handleMpdChange}>
              <option>Select MPD</option>
              {Array.from(new Set(mpdData.map((item) => item.mpd))).map((mpd) => (
                <option key={mpd} value={mpd}>
                  {mpd}
                </option>
              ))}
            </select>

          </div>
          <div className="selectorUnit">
            <input type="date" value={sellDate} onChange={handleDate}/>
          </div>
          <div className="selectorButton">
            <button onClick={handleNozel}>Add Nozel Sale</button>
          </div>
          <img
          src="Assets/HQ/close.png"
          className="closeModel"
          onClick={() => setNozelSalesModel(false)}
        />
        </div>
        {nozzleData.map((item, index) => (
          <InputUnit
            key={index}
            index={index}
            data={item}
            onDataChange={handleInputChange}
          />
        ))}
      </div>
    </div>
  );
};

export default AddNozelSaleFinal;

const InputUnit = ({ index, data, onDataChange}) => {
  const handleChange = (event) => {
    const { name, value } = event.target;
    onDataChange(index, name, value);
  };
  return (
    <div className="entrySection">
     <div className="entryUnit">
        <label>Nozzle</label>
        <input
          type="text"
          name="nozzle"
          value={data.nozelName || ""}
          readOnly
        />
      </div>
      <div className="entryUnit">
        <label>Opening Meter</label>
        <input
          type="text"
          name="openingMeter"
          value={data.openingMeter || ""}
          readOnly
        />
      </div>
      <div className="entryUnit">
        <label>Closing Meter</label>
        <input
          type="text"
          name="closingMeter"
          value={data.closingMeter || ""}
          onChange={handleChange}
          
        />
      </div>
      <div className="entryUnit">
        <label>Additional Out</label>
        <input
          type="text"
          name="additionalOut"
          value={data.additionalOut || ""}
          onChange={handleChange}
        />
      </div>
      <div className="entryUnit">
        <label>Additional In</label>
        <input
          type="text"
          name="additionalIn"
          value={data.additionalIn || ""}
          onChange={handleChange}
        />
      </div>
      <div className="entryUnit">
        <label>Testing</label>
        <input
          type="text"
          name="testing"
          value={data.testing || ""}
          onChange={handleChange}
        />
      </div>
      <div className="entryUnit">
        <label>Rate</label>
        <input
          type="text"
          name="rate"
          value={data.rate || ""}
          readOnly
        />
      </div>
      <div className="entryUnit">
        <label>Net Sales</label>
        <input
          type="text"
          name="netSales"
          value={data.netSales || ""}
          readOnly
        />
      </div>
      <div className="entryUnit">
        <label>Total</label>
        <input
          type="text"
          name="total"
          value={data.total || ""}
          readOnly
        />
      </div>
      <div className="entryUnit">
        <label>Sales Dsr</label>
        <input
          type="text"
          name="salesDsr"
          value={data.salesDsr || ""}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};
