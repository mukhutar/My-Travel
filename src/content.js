import React from "react";
import {FaLocationDot} from 'react-icons/fa6'
export default function Content(data){
    return(
    <div>
      
      <section className="nav">
        <h1>{data.Head}</h1>
       </section>
        
        <div className="main-content">
       
            <div className="content">
               <div className="image"> 
                 <img src={data.img} alt=""/>
               </div>
               
               <div className="aside">
               <section className="location" >
               <p className="location"><FaLocationDot className="icon"/>{data.location}</p> 
               
               <a href={data.map}>View on google Maps</a>
               </section>
               <h1 className="title">{data.title}</h1>
               
               <h2 className="date">{data.date}</h2>
               <p>{data.description}</p> 
               </div> <br/>


            </div>

        </div>
        
    </div>
        
    )

}