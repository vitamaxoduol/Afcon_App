import PlayerCard from "./PlayerCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { useMyCustomHook } from "../../Context/AppContext";
import { useParams } from "react-router-dom";

const FLAG="https://media.istockphoto.com/id/1217456327/vector/national-france-flag-vector-illustration.jpg?s=612x612&w=0&k=20&c=73SCididFCKYTo035ilEGq9dMI5hvzqoIAdsMUt9Miw="

const SpecificCountry = () => {
  const [country, setCountry] = useState({})
  // const URL="http://localhost:3000/players"
  const {API_URL}=useMyCustomHook()
  let COUNTRY_FLAG=country.flag_url
  // console.log(country)
  const {id}=useParams()

  useEffect(()=>{
        axios.get(`${API_URL}/api/countries/${id}`)
        .then(response=>{
          setCountry(response.data)
          // COUNTRY_FLAG=response.data.flag_url
          // console.log(country)
        })
        .catch(error=>{
          alert("Error in country fetching!")
          console.log(error.message)
        })
  },[id])

  const containerStyle = {
    backgroundImage: `url(${country.flag_url})`,
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundAttachment: 'scroll',
    boxShadow: 'inset 0px 0px 8px rgba(255, 255, 255, 1)',
  };
  
  return (
    <div className="w-full h-full font-poppins bg-bgcolor">
      <div className="">
        <header className="capitalize text-2xl h-[7rem] lg:h-[11rem] bg-red-500 text-white flex items-center pl-10">
          <div className="flex items-center gap-x-4">
            {
              !country?<h1>Loading...</h1>:
            <div style={containerStyle} className=" w-[4rem] h-[2.7rem]"></div>
          }
            <span className="font-medium text-3xl">{country.name}</span>
          </div>
         
        </header>

        <section className="w-[94%] mx-auto pb-8">

        <h1 className="text-2xl font-medium mb-8 mt-7">Squad</h1>
        {
          country?(
          <div className="grid md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {
            country.players&&country.players.map((eachPlayer, index)=>{
              if (eachPlayer){
                return <PlayerCard key={index} eachPlayer={eachPlayer} theCountry={COUNTRY_FLAG}/>
              }
            })
          }
        </div>)
        :<h1>Loading...</h1>
        }
      </section>
      </div>
    </div>
  )
}


export default SpecificCountry