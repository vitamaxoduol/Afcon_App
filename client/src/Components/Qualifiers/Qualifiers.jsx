import GroupTableRow from "./reusables/GroupTableRow";
import QualifierNews from "./reusables/QualifierNews";
import Matches from "./reusables/Matches";
import { useEffect, useState } from "react";
import axios from "axios";
import { useMyCustomHook } from "../Context/AppContext";


const Qualifiers = () => {
    const [groupStages, setGroupStages] = useState()
    const {API_URL}=useMyCustomHook()
    useEffect(()=>{
        axios.get(`${API_URL}/api/group_stages`)
        .then(response=>{
            setGroupStages(response.data)
        })
        .then(error=>{
            console.log("Error while getting group stages")
        })
    },[])
  return (
    <div className="h-full w-full bg-bgcolor font-poppins">
      <div className="h-full ">
        <header className=" text-[1.4rem] lg:text-[2rem] lg:h-[10rem] h-[5rem] bg-blue-500 text-white flex items-center pl-12 font-medium">
          2024 AFCON&trade; Qualifiers
        </header>

        <div className="w-[95%] m-auto">
          <h1 className="my-7 uppercase text-[1.2rem] lg:text-[1.3rem] font-medium">
            Follow the 2024 AFCON Qualifiers
          </h1>

          <Matches />

        <h1 className="lg:text-2xl text-[1.2rem] font-medium my-5">GROUPS</h1>
        {
            groupStages?
        <div className="grid gap-y-4 grid-cols-1 lg:grid-cols-2 gap-x-[1rem]">
            {
                groupStages.map((eachGroup,index)=>{
                    return(
                        <table key={index} className="w-full  lg:w-[31rem] bg-white p-20 rounded-xl">
                            <thead>
                                <tr className="h-[4rem] border-b-[1px] border-b-gray-300 font-normal">
                                    <th className="text-center font-semibold text-xl lg:text-2xl text-black w-[8rem]">{eachGroup.name}</th>
                                    {/* <th className="text-center font-normal text-sm text-gray-500">A</th> */}
                                    <th className="text-center font-normal text-sm text-gray-500 w-[3rem]">P</th>
                                    <th className="text-center font-normal text-sm text-gray-500 w-[3rem]">W</th>
                                    <th className="text-center font-normal text-sm text-gray-500 w-[3rem]">D</th>
                                    <th className="text-center font-normal text-sm text-gray-500 w-[3rem]">L</th>
                                    <th className="text-center font-normal text-sm text-gray-500 w-[3rem]">GD</th>
                                    <th className="text-center font-normal text-sm text-gray-500 w-[3rem]">Pts</th>
                                </tr>

                            </thead>
                            <tbody>
                                {
                                    eachGroup.countries.map((eachCountry,index)=>{
                                        return <GroupTableRow key={index} No={index+1} onEachCountry={eachCountry}/>
                                    })
                                }
                                
                                
                            </tbody>
                        </table>
                    )
                })
            }
            

        </div>
        :<h1>Loading...</h1>
    }

        <section className="h-full w-full mb-10 mt-20">
            <h1 className="mb-2 uppercase text-[1.3rem] lg:text-[1.7rem] font-medium">latest qualifiers news</h1>
            
            <QualifierNews/>

        </section>

        </div>
      </div>
    </div>
  );
};

export default Qualifiers;
