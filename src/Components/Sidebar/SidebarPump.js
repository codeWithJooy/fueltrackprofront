import React from 'react'
import SidebarUnit from './SidebarUnit'
import "./Sidebar.css"

const SidebarPump=({page="LogOut",setShowSidebar})=>{
    return(
        <div className='sidebar'>
        <div className='sidebarTitle'>
            <p>Pump Name</p>
            <img src="Assets/HQ/close_sidebar.png" className='sidebarCross' onClick={()=>setShowSidebar(false)}/>
        </div>
        <SidebarUnit title="CashBook" page={page} />
        <SidebarUnit title="Sales" page={page} />
        <SidebarUnit title="Party"page={page} />
        <SidebarUnit title="Purchase" page={page}/>
        <SidebarUnit title="Bank" page={page} />
        <SidebarUnit title="Expenditure" page={page}/>
        <SidebarUnit title="Logout" page={page}/>
      </div> 
    )
}

export default SidebarPump;