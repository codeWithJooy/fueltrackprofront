import React from 'react'
import SidebarUnit from './SidebarUnit'
import "./Sidebar.css"

const Sidebar=({page})=>{
    return(
        <div className='sidebar'>
        <div className='sidebarTitle'>
            <p>FuelTrack Pro</p>
        </div>
        <SidebarUnit title="Dashboard" page={page}/>
        <SidebarUnit title="Cash" page={page} />
        <SidebarUnit title="Sales" page={page} />
        <SidebarUnit title="Stocks"page={page} />
        <SidebarUnit title="Credit" page={page}/>
        <SidebarUnit title="Bank" page={page} />
        <SidebarUnit title="Setup" page={page}/>
        <SidebarUnit title="Settings" page={page}/>
        <SidebarUnit title="Log Out" page={page}/>
      </div> 
    )
}

export default Sidebar;
