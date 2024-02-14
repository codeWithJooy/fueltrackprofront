import React from "react";
import { useHistory } from "react-router-dom"

const PumpCard = ({id,name,owner,street,city,state}) => {
  
    const history=useHistory()
    const handlePump=()=>{
        localStorage.setItem('pumpId',id);
        history.push("/sales")
    }
    return (
    <div className="pumpCard" onClick={handlePump}>
      <div className="pumpImg">
        <img src="Assets/HQ/gas-station.png" />
      </div>
      <div className="pumpDetails">
        <div className="pumpDesc">
          <div className="pumpCardName">
            <p>{name}</p>
          </div>
        </div>
        <div className="pumpDesc">
        <div className="pumpCity">
            <p>{owner}</p>
          </div>
          <div className="pumpCityRight">
            <p>{street}</p>
          </div>
        </div>
        <div className="pumpDesc">
          <div className="pumpCity">
            <p>{city}</p>
          </div>
          <div className="pumpCityRight">
            <p>{state}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PumpCard;
