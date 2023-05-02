import React, { useEffect } from "react";
import { useState } from "react";
import Button from "../../components/Button";
import ColorBar from "../../components/ColorBar";
const Signal=()=>{
    const[status,setStatus]=useState(0);
    const ChangeStatus=()=>{
        setStatus(status?0:1)
    }

   
     
     
    return (
      <div>
        <center>
          <ColorBar status={status} buttonClick={ChangeStatus} />
          <Button status={status} buttonClick={ChangeStatus} />
        </center>
      </div>
    );
}
export default Signal;