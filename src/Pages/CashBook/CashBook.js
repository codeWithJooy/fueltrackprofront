import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar';
import Header from '../../Components/Header/Header';
import "./Dashboard.css"
import DashCash from './DashCash';
import DashParty from './DashParty';

const CashBook=()=>{
  return(
    <div className="main">
    <Sidebar page={"CashBook"}/>
    <div className="page">
      <Header title={"CashBook"} />

      <div className="cashMain">
          <div className='dashLeft'>
             <div className='dashCash'>
                <DashCash />
             </div>
             <div className='dashCash'>
                <DashCash/>
             </div>
          </div>
          <div className='dashRight'>
             <DashParty />
          </div>
      </div>
    </div>
  </div>
  )
}

export default CashBook;