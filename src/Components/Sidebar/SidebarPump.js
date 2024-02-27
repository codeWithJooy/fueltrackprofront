import React,{useState,useEffect} from 'react'
import SidebarUnit from './SidebarUnit'
import "./Sidebar.css"
import { getPumpName } from '../../actions/pumpAction/miscAction'

const SidebarPump=({page="LogOut",setShowSidebar})=>{
    
    const [pumpName,setPumpName]=useState("")
    
    useEffect(()=>{
      (async()=>{
         let data=await getPumpName(localStorage.getItem("pumpId"))
         setPumpName(data)
      })()
    },[])
    
    return(
        <div className='sidebar'>
        <div className='sidebarTitle'>
            <p>{pumpName}</p>
            <img src="Assets/HQ/close_sidebar.png" className='sidebarCross' onClick={()=>setShowSidebar(false)}/>
        </div>
        <SidebarUnit title="Cashbook" page={page} />
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