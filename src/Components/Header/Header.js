import React from "react";
import "./Header.css"

const Header = ({title}) => {
  return (
    <div className="header">
      <div className="headerTitle">
        <p>{title}</p>
      </div>
      <div className="headerDetails">
         <div className="headerDate">
           08 January
         </div>
         <div className="headerPriceComponents">
         <div className="headerPrice">
            <div className="currentPrice">
               HSD 90.02
            </div>
            <div className="priceTrend">
              <img src="Assets/Header/decrease.png"/>
              <p style={{color:"red"}}>10%</p>            
            </div>
         </div>
         <div className="headerPrice">
            <div className="currentPrice">
               MS 98.02
            </div>
            <div className="priceTrend">
              <img src="Assets/Header/increase.png"/>
              <p style={{color:"green"}}>10%</p>            
            </div>
         </div>
         </div>
      </div>
    </div>
  );
};

export default Header;