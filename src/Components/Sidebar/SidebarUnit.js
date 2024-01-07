
import React from 'react';
import { useHistory } from 'react-router-dom';
import "./Sidebar.css"


const SidebarUnit = ({ img, title, page }) => {
    const className = title == page ? 'sidebarUnitActive' : 'sidebarUnit';
    const history=useHistory()
    const handleRoute=()=>{
        history.push(`/${title.toLowerCase()}`)
    }
    return (
        <div className={className} onClick={handleRoute}>
            <img src={"Assets/Dashboard/dashboard.png"} alt={title} />
            <p>{title}</p>
        </div>
    );
}

export default SidebarUnit;