import "./Bulle.css"
import { useState } from "react"

const Bulle = ({text, children}) =>{

    const [isVisible, setIsVisible] = useState(false);

    return(

    <div className="bulle_container" onMouseEnter={()=> setIsVisible(true)} onMouseLeave={()=> setIsVisible(false)}>
        
        {children}
        
        <div className={`bulle ${isVisible ? "open" : ""}`}>
            {text}
        </div>
    
    </div>

    )
}

export default Bulle;