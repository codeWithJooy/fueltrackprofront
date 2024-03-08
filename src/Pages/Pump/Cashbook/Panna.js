import React, { useEffect, useState } from "react";
import "./Panna.css";
import moment from "moment";
import { getNozelReading } from "../../../actions/pumpAction/salesAction";
import { getPartySales } from "../../../actions/pumpAction/partyAction";
import { getPumpExpenditure } from "../../../actions/pumpAction/expenditureAction";
import { getPumpPurchase } from "../../../actions/pumpAction/purchaseAction";
const Panna = () => {
  const [searchData, setSearchData] = useState({
    pumpId: localStorage.getItem("pumpId"),
    date: moment().format("YYYY-MM-DD"),
    status:"Pending",
  });

  const [partyData, setPartyData] = useState([]);
  const [salesData,setSalesData]=useState([]);
  const [expenditureData,setExpenditureData]=useState([])
  const [purchaseData,setPurchaseData]=useState([])

  useEffect(() => {
    (async () => {
      let salesData = await getNozelReading(searchData);
      setSalesData(salesData)
    })();
  }, []);

  useEffect(()=>{
    (async()=>{
        let partySales=await getPartySales(searchData)
        setPartyData(partySales)
    })()
  },[]);

  useEffect(()=>{
    (async()=>{
        let expenditureSales=await getPumpExpenditure(searchData)
        setExpenditureData(expenditureSales)
    })()
  },[])

  useEffect(()=>{
    (async()=>{
      let purchaseSales=await getPumpPurchase(searchData)
      setPurchaseData(purchaseSales)
    })()
  },[])

  return (
    <div className="pannaMain">
      <div className="pannaContainer">
        <div className="pannaRow">
          <div className="pannaLeft">
          <p>Nozzle Sale</p>
            <table className="dashCashTable">
              <thead style={{ background: "#19363C", color: "white" }}>
                <tr>
                  <th>Nozel</th>
                  <th>Opening Meter</th>
                  <th>Closing Meter</th>
                  <th>Total</th>
                  <th>salesDsr</th>
                </tr>
              </thead>
              <tbody>
                {salesData &&
                  salesData.map((party) => (
                    <tr key={party.nozel}>
                      <td>{party.nozelName}</td>
                      <td>{party.openingMeter}</td>
                      <td>{party.closingMeter}</td>
                      <td>{party.total}</td>
                      <td>{party.salesDsr}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
          <div className="pannaRight">
          <p>Party Sales</p>
            <table className="dashCashTable">
              <thead style={{ background: "#19363C", color: "white" }}>
                <tr>
                  <th>Party Name</th>
                  <th>Item</th>
                  <th>Quantity</th>
                  <th>Rate</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {partyData && partyData.map((party) => (
                  <tr key={party.partyName}>
                    <td>{party.partyName}</td>
                    <td>{party.item}</td>
                    <td>{party.qty}</td>
                    <td>{party.rate}</td>
                    <td>{party.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="pannaRow">
          <div className="pannaLeft">
          <p>Pump Expenditure</p>
            <table className="dashCashTable">
              <thead style={{ background: "#19363C", color: "white" }}>
                <tr>
                  <th>Expenditure Type</th>
                  <th>Details</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {expenditureData &&
                  expenditureData.map((party) => (
                    <tr key={party.expenditureType}>
                      <td>{party.details}</td>
                      <td>{party.amount}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
          <div className="pannaRight">
            <p>Pump Purchase</p>
            <table className="dashCashTable">
              <thead style={{ background: "#19363C", color: "white" }}>
                <tr>
                  <th>Supplier Name</th>
                  <th>Item</th>
                  <th>Quantity</th>
                  <th>Purchase Ledger</th>
                </tr>
              </thead>
              <tbody>
                {purchaseData && purchaseData.map((party) => (
                  <tr key={party.supplierName}>
                    <td>{party.supplierName}</td>
                    <td>{party.itemName}</td>
                    <td>{party.qty}</td>
                    <td>{party.purchaseLedger}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Panna;
