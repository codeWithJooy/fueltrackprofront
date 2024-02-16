import React, { useState, useEffect } from "react";
import "./Party.css";
import { getPartyName } from "../../../actions/pumpAction/partyAction";
const PartyDetails = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [party, setParty] = useState([]);
  useEffect(() => {
    (async () => {
      let partyData = await getPartyName(localStorage.getItem("pumpId"));
      setParty(partyData);
    })();
  }, []);
  return (
    <div className="partyContent">
      {party &&
        party.map((data) => (
          <div className="partyCard">
            <div className="partyCardRow">
              <div className="partyName">
                <p>{data.partyName}</p>
              </div>
              <div className="partyDetailsCardUnit">
                <p>{data.group}</p>
              </div>
              <div className="partyDetailsCardUnit">
                <p>{data.openingBalance}</p>
              </div>
              <div className="partDetailsCardUnitDrop">
                <img
                  src={`${isOpen} ? Assets/HQ/up.png : Assets/HQ/down.png`}
                  onClick={() => setIsOpen(!isOpen)}
                />
              </div>
            </div>
            {isOpen && (
              <>
                <div className="partyCardRow">
                  <div className="partyDetailsCardUnit">
                    <p>House:{data.house}</p>
                  </div>
                  <div className="partyDetailsCardUnit">
                    <p>Street:{data.street}</p>
                  </div>
                  <div className="partyDetailsCardUnit">
                    <p>City:{data.city}</p>
                  </div>
                  <div className="partyDetailsCardUnit">
                    <p>State:{data.state}</p>
                  </div>
                </div>

                <div className="partyCardRow">
                  <div className="partyDetailsCardUnit">
                    <p>Pan:{data.pan}</p>
                  </div>
                  <div className="partyDetailsCardUnit">
                    <p>GST:{data.gst}</p>
                  </div>
                  <div className="partyDetailsCardUnit">
                    <p>Mobile:{data.mobile}</p>
                  </div>
                  <div className="partyDetailsCardUnit">
                    <p>Email:{data.email}</p>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
    </div>
  );
};

export default PartyDetails;
