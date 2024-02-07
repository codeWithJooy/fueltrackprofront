import React,{useState,useEffect} from "react"
import SidebarPump from "../../../Components/Sidebar/SidebarPump"
import "../../Headquarters/css/Items.css";
import "../../Headquarters/css/Common.css";

import BankHeader from "../../../Components/Header/Pump/Bank/BankHeader";

const Bank = () => {
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
        <SidebarPump page={"Bank"} setShowSidebar={setShowSidebar} />
      )}
      <div className="page">
        <BankHeader
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          setShowSidebar={setShowSidebar}
        />

      </div>
    </div>
  );
};

export default Bank;