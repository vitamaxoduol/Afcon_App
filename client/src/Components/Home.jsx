import "../StyleSheets/homePage.css";
import CitiesSlider from "./slider";
import Dates from "./home page components/Dates";
import WhatsNew from "./home page components/WhatsNew";
import IntroVedio from "./home page components/IntroVedio";
import HostCities from "./home page components/HostCities";
import Fqas from "./home page components/Fqas";
import Tournaments from "./home page components/Tournaments";
import HashTags from "./home page components/HashTags";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useMyCustomHook } from "./Context/AppContext";

function Home() {
  const navigate=useNavigate()
  const { userIsLoged }=useMyCustomHook()
  
  useEffect(()=>{
    const LOGINSTATUS=JSON.parse(sessionStorage.getItem("LOGINSTATUS"));
    if (LOGINSTATUS==null){
      navigate("/signin");
    }
  },[userIsLoged, navigate])
  return (
    <div className="slider-section">
      <CitiesSlider />
      <Dates />
      <IntroVedio />
      <WhatsNew />
      <HostCities />
      <Fqas />
      <Tournaments />
      <HashTags />
    </div>
  );
}

export default Home;
