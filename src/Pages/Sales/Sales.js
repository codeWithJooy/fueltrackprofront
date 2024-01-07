import React,{useState} from "react"
import Sidebar from "../../Components/Sidebar/Sidebar";
import Header from "../../Components/Header/Header";
import SalesList from "./SalesList";

const Sales = () => {
  const [toggle, setToggle] = useState("add");
  const handleToggle = (value) => {
    setToggle(value);
  };

  return (
    <div className="main">
      <Sidebar page={"Sales"}/>
      <div className="page">
        <Header title={"Sales Section"} />

        <div className="cashMain">
          <SalesList />
        </div>
      </div>
    </div>
  );
};

export default Sales;
