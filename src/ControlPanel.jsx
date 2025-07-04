import { useState } from "react";
import Button  from "./components/Button";
import Loading from "./components/Loading";

 function ControlPanel(){

  const [status,setStatus] =  useState("Idle");
  const [isLoading,setIsLoading] =useState(false);

  async function  sendCommand(direction){
  //console.log("Moving: ",direction);

  setIsLoading(true);

  const url = `${import.meta.env.VITE_ROVER_URL}/move?direction=${direction}`;


  try{
    const response= await fetch(url);

    if(!response.ok){
      console.log("Error could not fetch from rover");
      setStatus(`❌ Failed to move ${direction}`);
    }else{

     setStatus(`Sucessfully moved ${direction}`);
    }
    setIsLoading(false);

  }catch(e){
    console.error(e);
    setStatus(`Error while sending command move ${direction}`);
    setIsLoading(false);
  }
}

  return(
    <>
    <div className="h-96 flex justify-center items-center">
      <div className="grid grid-cols-3 grid-rows-3 gap-2">
      <div className="col-start-1 row-start-2">
        <Button  value="Left"  onClick={()=>sendCommand("left")}/>
      </div>
      <div className="col-start-3 row-start-2">
        <Button  value="Right" onClick={()=>sendCommand("right")}/>
      </div>
      <div className="col-start-2 row-start-1">
        <Button  value="Up" onClick={()=>sendCommand("up")}/>
      </div>
      <div className="col-start-2 row-start-3">
        <Button  value="Down" onClick={()=>sendCommand("down")}/>
      </div>
    </div>
    </div>
    <div className="text-xl mt-4 text-center">Status: {isLoading ? <Loading /> : status}</div>

    </>
  )
}



export default ControlPanel