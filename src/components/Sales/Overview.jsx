import React from "react";
import salesview from '../../assets/images/Salesoverview.png'
import vector2 from '../../assets/images/Vector2.png'

            

function Overview() {
  return (
    <div>
        
              
      
       
        <div className="relative bg-cover bg-center bg-no-repeat ">
          <img src={salesview} className="h-[200px] w-[680px] ml-[60px]"></img>
          <div className="absolute index-x-0 bottom-0 flex items-center justify-center">
            <img src={vector2} alt="Overlay Image" className="h-[200px] w-[680px] ml-[60px]" />
          </div>
        </div>
      
      
    </div>
  );
}

export default Overview;
