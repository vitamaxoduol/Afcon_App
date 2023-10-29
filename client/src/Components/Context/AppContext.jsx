import React, { createContext, useContext, useState } from "react";

const CONT = createContext();
export const useMyCustomHook=()=>useContext(CONT)

function AppContext({ children }) {
  const [userIsLoged, onsetUserIsLoged] = useState(false);
  // const [payCardState, setPayCardState] = useState(false);



  const API_URL="http://localhost:5000"
  const LOGGED_IN_NAME="Alan Walker"
  const classes = {
    functions: "function",
  };

  const setUserIsLoged=(newValue)=>{
    onsetUserIsLoged(newValue)
  }

  return <CONT.Provider value={{classes,API_URL,LOGGED_IN_NAME,userIsLoged,setUserIsLoged}}>{children}</CONT.Provider>;
}

export { AppContext, CONT };
