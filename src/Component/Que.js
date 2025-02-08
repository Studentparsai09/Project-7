import React from "react";
function Que({question,Options,handleclick,currentAnswer}){
    return(
        <div>
            <h1>{question}</h1>
            <ul>
                {Options.map((Options,index)=>(
                    <li key={index} onClick={()=>handleclick(Options)}className={currentAnswer === Options ? 'selected':""  }>{Options}</li> 
                ))}
            </ul>
            
        </div>
    )
}
export default Que;