import React,{useState,useEffect} from "react"
import SidebarPump from "../../../Components/Sidebar/SidebarPump"
import "../../Headquarters/css/Items.css";
import "../../Headquarters/css/Common.css";

import PurchaseHeader from "../../../Components/Header/Pump/Purchase/PurchaseHeader";
import AllPurchase from "./AllPurchase";

const Purchase = () => {
  const [activeItem, setActiveItem] = useState("All");
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
        <SidebarPump page={"Purchase"} setShowSidebar={setShowSidebar} />
      )}
      <div className="page">
        <PurchaseHeader
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          setShowSidebar={setShowSidebar}
        />
        {
        activeItem=="All" && <AllPurchase />
       }
      </div>
    </div>
  );
};

export default Purchase;