import React,{useState,useEffect} from "react"
import SidebarPump from "../../../Components/Sidebar/SidebarPump"
import "../../Headquarters/css/Items.css";
import "../../Headquarters/css/Common.css";
import SalesHeader from "../../../Components/Header/Pump/Sales/SalesHeader";
import NozelSale from "./NozelSale";
import OtherSale from "./OtherSale";
import LedgerType from "./LedgerType";

const Sales = () => {
  const [activeItem, setActiveItem] = useState("Nozel");
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
        <SidebarPump page={"Sales"} setShowSidebar={setShowSidebar} />
      )}
      <div className="page">
        <SalesHeader
         activeItem={activeItem}
         setActiveItem={setActiveItem}
         setShowSidebar={setShowSidebar}
       />
       {
        activeItem=="Nozel" && <NozelSale/>
       }
       {
        activeItem=="Others" && <OtherSale/>
       }
       {
        activeItem=="Ledger" && <LedgerType />
       }
      </div>
    </div>
  );
};

export default Sales;