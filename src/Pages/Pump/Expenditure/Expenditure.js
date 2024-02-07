import React,{useState,useEffect} from "react"
import SidebarPump from "../../../Components/Sidebar/SidebarPump"
import "../../Headquarters/css/Items.css";
import "../../Headquarters/css/Common.css";

import ExpenditureHeader from "../../../Components/Header/Pump/Expenditure/ExpenditureHeader";
import AllExpenditure from "./AllExpenditure";
import ExpenditureType from "./ExpenditureType";
const Expenditure = () => {
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
        <SidebarPump page={"Expenditure"} setShowSidebar={setShowSidebar} />
      )}
      <div className="page">
        <ExpenditureHeader
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          setShowSidebar={setShowSidebar}
        />
       {
        activeItem == "All" && <AllExpenditure />
       }
       {
        activeItem == "Type" && <ExpenditureType />
       }
      </div>
    </div>
  );
};

export default Expenditure;