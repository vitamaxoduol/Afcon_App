const MatchCard = ({teamA,teamB,scoreA,scoreB,date}) => {
    

  return ( 
    <div className='w-full font-poppins'>
        <div  className="bg-white p-4 relative w-[100%] md:w-[38rem] lg:w-[38rem] h-[8.5rem] lg:h-[11rem] rounded-lg bg-transparent border-2 border-transparent transition-all duration-500 hover:border-blue-500 shadow-[0_0_4px_rgba(0,0,0,0.2)] hover:shadow-[0_4px_18px_0_rgba(0,0,0,0.28)] cursor-pointer overflow-hidden">
            <div className="text-gray-500 flex justify-between items-center lg:text-md text-xs">
                <div className="">
                    <p className="text-start">Round One</p>
                    <p className="text-start">Kasarani Stadium, Home of Heroes</p>
                </div>
                
                <p className=" text-right">{date}</p>
            </div>
            
            <div className=" flex justify-between items-center mt-1">
                <div className="w-[38rem]">
                    <p className="flex justify-between mt-2 lg:mt-3">
                        <span className="uppercase text-[0.85rem] lg:text-[0.8rem] font-medium ">{teamA}</span>
                        <span className="">{scoreA}</span>
                    </p>
                    <p className="flex justify-between mt-1 lg:mt-2">
                        <span className="uppercase text-[0.85rem] lg:text-[0.8rem] font-medium ">{teamB}</span>
                        <span className="">{scoreB}</span>
                    </p>
                </div>
                <span className="bg-blue-500 text-white text-sm px-2 rounded-lg ml-3">FT</span>
            </div>
            
        </div>
    </div>
  )
}

export default MatchCard