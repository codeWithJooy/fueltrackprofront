import React, { useState, useEffect } from "react";
import SidebarPump from "../../../Components/Sidebar/SidebarPump";
import "../../Headquarters/css/Items.css";
import "../../Headquarters/css/Common.css";
import SalesHeader from "../../../Components/Header/Pump/Sales/SalesHeader";
import CashbookHeader from "../../../Components/Header/Pump/Cashbook/CashbookHeader";
import NozelSale from "../Sales/NozelSale";
import NozelSaleRange from "../Sales/NozelSaleRange";
import AllPurchaseRange from "../Purchase/AllPurchaseRange";
import PartyRange from "../Party/PartyRange";
import ExpenditureRange from "../Expenditure/ExpenditureRange";
import Panna from "./Panna";

const Cashbook = () => {
  const [activeItem, setActiveItem] = useState("Panna");
  const [showSidebar, setShowSidebar] = useState(true);
  useEffect(() => {
    const handleResize = () => {
      setShowSidebar(window.innerWidth > 768); // Adjust the threshold as needed
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="main">
      {showSidebar && (
        <SidebarPump page={"Cashbook"} setShowSidebar={setShowSidebar} />
      )}
      <div className="page">
        <CashbookHeader
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          setShowSidebar={setShowSidebar}
        />
        {activeItem=="Panna" && <Panna />}
        {activeItem == "Sale" && <NozelSaleRange/>}
        {activeItem=="Purchase" && <AllPurchaseRange/>}
        {activeItem=="Party" && <PartyRange />}
        {activeItem=="Expenditure" && <ExpenditureRange />}
      </div>
    </div>
  );
};

export default Cashbook;
