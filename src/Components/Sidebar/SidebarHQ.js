import React from 'react'
import SidebarUnit from './SidebarUnit'
import "./Sidebar.css"

const SidebarHQ=({page,setShowSidebar})=>{
    return(
        <div className='sidebar'>
        <div className='sidebarTitle'>
            <p>FuelTrack Pro</p>
            <img src="Assets/HQ/close_sidebar.png" className='sidebarCross' onClick={()=>setShowSidebar(false)}/>
        </div>
        <SidebarUnit title="Home" page={page}/>
        <SidebarUnit title="Pumps" page={page} />
        <SidebarUnit title="Users" page={page} />
        <SidebarUnit title="Items"page={page} />
        <SidebarUnit title="Rate" page={page}/>
        <SidebarUnit title="Ledger" page={page} />
        <SidebarUnit title="Stock" page={page}/>
        <SidebarUnit title="Transactions" page={page}/>
        <SidebarUnit title="Log Out" page={page}/>
      </div> 
    )
}

export default SidebarHQ;