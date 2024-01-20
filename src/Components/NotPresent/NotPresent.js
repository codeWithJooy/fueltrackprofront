import React from "react"
import "./NotPresent.css"

const NotPresent=({text="No Tanks Added"})=>{
    return(
        <div className="notPresent">
            <p>{text}</p>
        </div>
    )
}

export default NotPresent;