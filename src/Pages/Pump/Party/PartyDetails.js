import React, { useState } from "react";
import "./Party.css";

const PartyDetails = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="partyContent">
      <div className="partyCard">
        <div className="partyCardRow">
          <div className="partyName">
            <p>PartyName</p>
          </div>
          <div className="partyDetailsCardUnit">
            <p>Group</p>
          </div>
          <div className="partyDetailsCardUnit">
            <p>Opening Balance</p>
          </div>
          <div className="partDetailsCardUnitDrop">
            <img src={`${isOpen} ? Assets/HQ/up.png : Assets/HQ/down.png`}   onClick={()=>setIsOpen(!isOpen)}/>
          </div>
        </div>
        {isOpen && (
          <>
            <div className="partyCardRow">
              <div className="partyDetailsCardUnit">
                <p>House</p>
              </div>
              <div className="partyDetailsCardUnit">
                <p>Street</p>
              </div>
              <div className="partyDetailsCardUnit">
                <p>City</p>
              </div>
              <div className="partyDetailsCardUnit">
                <p>State</p>
              </div>
            </div>

            <div className="partyCardRow">
              <div className="partyDetailsCardUnit">
                <p>Pan</p>
              </div>
              <div className="partyDetailsCardUnit">
                <p>GST</p>
              </div>
              <div className="partyDetailsCardUnit">
                <p>Mobile</p>
              </div>
              <div className="partyDetailsCardUnit">
                <p>Email</p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PartyDetails;
