import React, { useEffect, useState } from "react";
import "../Model.css";
import {
  addOtherSale,
  getAllProducts,
} from "../../../actions/pumpAction/salesAction";
import moment from "moment";

const AddOtherSalesModel = ({ setOtherSalesModel = "" }) => {
  const [data, setData] = useState({
    pumpId: localStorage.getItem("pumpId"),
    productId: "",
    productName:"",
    date: moment().format("YYYY-MM-DD"),
    quantity: "",
    rate: "",
    amount: "",
  });

  const [productsData, setProductsData] = useState([]);

 const handleSelect=(e)=>{
  const selectedIndex = e.target.selectedIndex;
  const productName = e.target.options[selectedIndex].text;
  setData({...data,productId:e.target.value,productName:productName})
 }
  const handlequantity = (e) => {
    const quantityNumber = parseFloat(e.target.value);
    const rateNumber = parseFloat(data.rate);
    const calculatedAmount = (quantityNumber * rateNumber)?(quantityNumber* rateNumber):0 ;
    setData({ ...data, quantity: e.target.value, amount: calculatedAmount });
  };

  const handleRate = (e) => {
    const quantityNumber = parseFloat(data.quantity);
    const rateNumber = parseFloat(e.target.value);

    // Multiply quantity and rate to get the amount
    const calculatedAmount = (quantityNumber * rateNumber)?(quantityNumber* rateNumber):0 ;
    setData({ ...data, rate: e.target.value, amount: calculatedAmount });
  };
  const handlePumpAdd = () => {
    (async()=>{
      if(await addOtherSale(data)){
        setOtherSalesModel(false)
      }
    })()
  };

  useEffect(() => {
    (async () => {
      let products = await getAllProducts(data.pumpId);
      setProductsData(products);
    })();
  }, []);

  return (
    <div className="modelContainer">
      <div className="modelCard">
        <img
          src="Assets/HQ/close.png"
          className="closeModel"
          onClick={() => setOtherSalesModel(false)}
        />
        <div className="modelTitle">
          <p>Add Other Sales</p>
        </div>
        <div className="modelInputContainer">
          <div className="modelHalf">
            <label>Product</label>
            <select onChange={handleSelect}>
              {productsData &&
                productsData.map((data, key) => (
                  <option value={data._id}>{data.productName}</option>
                ))}
            </select>
          </div>
          <div className="modelHalf">
            <label>Date</label>
            <input type="date" name="date" value={data.date} />
          </div>
        </div>
        <div className="modelInputContainer">
          <div className="modelHalf">
            <label>Quantity</label>
            <input
              type="text"
              name="quantity"
              value={data.quantity}
              onChange={handlequantity}
            />
          </div>
          <div className="modelHalf">
            <label>Rate</label>
            <input type="text" name="rate" value={data.rate} onChange={handleRate}/>
          </div>
        </div>
        <div className="modelInputContainer">
          <div className="modelHalf">
            <label>Amount</label>
            <input type="text" name="amount" value={data.amount} />
          </div>
        </div>

        <div className="modelInputContainer">
          <button className="addModel" onClick={handlePumpAdd}>
            {" "}
            Add Sale
          </button>
          <button
            className="cancelModel"
            onClick={() => setOtherSalesModel(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddOtherSalesModel;
