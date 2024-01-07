import React from "react";

const Header = ({title}) => {
  return (
    <div className="header">
      <div className="headerTitle">
        <p>{title}</p>
      </div>
    </div>
  );
};

export default Header;