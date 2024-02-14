import React, { useState, useEffect } from "react";
import SidebarHQ from "../../Components/Sidebar/SidebarHQ";
import "./css/Items.css";
import "./css/Common.css";
import UsersHeader from "../../Components/Header/HQ/Users/UsersHeader";
import UserSection from "../../Components/HQ/Users/All/UserSection";

const Users = () => {
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
        <SidebarHQ page={"Users"} setShowSidebar={setShowSidebar} />
      )}
      <div className="page">
        <UsersHeader
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          setShowSidebar={setShowSidebar}
        />
       <UserSection />
      </div>
    </div>
  );
};

export default Users;