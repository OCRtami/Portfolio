import { useState } from "react";
import "./css/OverlayWork.css"

const overlayWork= ({children}) =>{

   const [isVisible, setIsVisible] = useState(false);

   return(

      <div 
      className="overlay absolute h-full w-full overflow-hidden"
      onMouseEnter={()=> setIsVisible(true)} 
      onMouseLeave={()=> setIsVisible(false)}>

     
      <div className={"fade_transition flex flex-col absolute h-full w-full justify-center items-center z-30 "+`${ isVisible ? "opacity-100" : "opacity-0"}`}>
         <p className="text-white mb-5" >Made With:</p>
         <div className="flex flex-row gap-2">
            {children}
         </div>
         <p className="text-white mt-5">For more information</p>
         <p className="text-white">Click <a href="https://google.fr" className="underline">here</a> to check the Github</p>
         
      </div>
      <div className={`absolute transition-opacity duration-[250ms] h-full w-[110%] bg-[rgba(0,0,0,0.8)] backdrop-blur-[4px] ${ isVisible ? "opacity-100" : "opacity-0"}`}></div>
   
      </div>

    )
 
 }

 export default overlayWork;