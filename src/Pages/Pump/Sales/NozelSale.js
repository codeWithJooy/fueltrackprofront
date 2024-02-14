import React, { useEffect, useState } from "react";
import "../Party/Party.css";
import AddNozelSalesModel from "../../../Components/Models/PumpModel/AddNozelSalesModel";
import {
  getNozelByPumpId,
  getPumpNozelSale,
  getNozelData,
  getNozelReading
} from "../../../actions/pumpAction/salesAction";
import moment from "moment";
import AddNozelSaleFinal from "../../../Components/Models/PumpModel/AddNozelSaleFinal";

const NozelSale = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [nozels, setNozels] = useState([]);
  const [mpdData,setMpdData]=useState([])
  const [sale, setSale] = useState([]);
  const [nozelSalesModel, setNozelSalesModel] = useState(false);

  let pumpId = localStorage.getItem("pumpId");

  const [searchData, setSearchData] = useState({
    pumpId:localStorage.getItem("pumpId"),
    mpd: "",
    date: moment().format("YYYY-MM-DD"),
    status:"Pending"
  });

  const handleMpd=(e)=>{
    setSearchData({...searchData,mpd:e.target.value})
  }
  const handleStatus=(e)=>{
    setSearchData({...searchData,status:e.target.value})
  }
  useEffect(() => {
    (async () => {
      let dat=await getNozelData( localStorage.getItem("pumpId"))
      setMpdData(dat)
    })();
  }, [nozelSalesModel]);

  useEffect(()=>{
    (async()=>{
      let search=await getNozelReading(searchData)
      setSale(search)
    })()
  },[nozelSalesModel,searchData])

  return (
    <div className="partyContent">
      <img
        src="Assets/HQ/add.png"
        className="addStock"
        onClick={() => {
          setNozelSalesModel(true);
        }}
      />
      <div className="partyDropdowns">
        <div className="partyDropdownContainers">

          <div className="dropContainer">
            <select onChange={handleMpd}>
              <option>Select MPD</option>
              {Array.from(new Set(mpdData.map((item) => item.mpd))).map((mpd) => (
                <option key={mpd} value={mpd}>
                  {mpd}
                </option>
              ))}
            </select>
          </div>
          <div className="dropContainer">
            <select onChange={handleStatus}>
              <option>Pending</option>
              <option>Approved</option>
              <option>Rejected</option>
            </select>
          </div>
          <div className="dropContainer">
            <input type="date" value={searchData.date} />
          </div>
        </div>
      </div>
      {sale &&
        sale.map((data, index) => (
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
                    `${isOpen}` == true
                      ? "Assets/HQ/up.png"
                      : "Assets/HQ/down.png"
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
        ))}

      {nozelSalesModel && (
        <AddNozelSaleFinal setNozelSalesModel={setNozelSalesModel} />
      )}
    </div>
  );
};

export default NozelSale;
