import React, { useState } from 'react'

import SidebarHQ from '../../Components/Sidebar/SidebarHQ';
import Header from '../../Components/Header/Header';
import "./css/Pumps.css"

const Pump=()=>{
    const [toggle,setToggle]=useState("add");
    const handleToggle=(value)=>{
        setToggle(value);
    }
    return(
     <div className='main'>
        <SidebarHQ page={"Pumps"} />
        <div className='page'>
            <Header title={"Pumps Section"} />
            <div className='cashMain'>
            <div className="toggleSection">
            <div className="toggleContainer">
              <button
                className={`formButton ${
                  toggle === "add" ? "toggleActive" : ""
                }`}
                onClick={() => handleToggle("add")}
              >
                Pumps
              </button>
              <button
                className={`listButton ${
                  toggle === "party" ? "toggleActive" : ""
                }`}
                onClick={() => handleToggle("party")}
              >
                Add Pump
              </button>
            </div>
          </div>
          <div className='pumpContainer'>
              <div className='pumpCard'>
                <div className='pumpImg'>
                  <img src="Assets/HQ/placeholder.png" />
                </div>
                <div className='pumpDetails'>
                  <div className='pumpName'>
                    <p>Pump Name</p>
                  </div>
                  <div className='pumpPlot'>
                    <p>Pump plotNo</p>
                  </div>
                </div>
              </div>
            </div>
            </div>
            
  

        </div>
     </div>
    )
}

export default Pump;