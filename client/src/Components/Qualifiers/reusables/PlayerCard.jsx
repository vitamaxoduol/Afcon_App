const PlayerCard = ({eachPlayer,theCountry}) => {
  
    const photo_url=eachPlayer.photo_url
    
    const containerStyle = {
      backgroundImage: `url(${photo_url})`,
      backgroundSize: '100% 100%',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      backgroundAttachment: 'scroll',
      boxShadow: 'inset 0px 0px 8px rgba(255, 255, 255, 1)',
    };
    const containerStyle2 = {
      backgroundImage: `url(${theCountry})`,
      backgroundSize: '100% 100%',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      backgroundAttachment: 'scroll',
      boxShadow: 'inset 0px 0px 8px rgba(255, 255, 255, 1)',
    };
  return (
    <div className="font-poppins cursor-pointer ">
        <div className="player-card relative border-[1px] mb-2 border-[rgba(0,0,0,0.4)] bg-white h-[26rem] w-[21rem] rounded-bl-[4rem] rounded-br-[4rem] rounded-lg hover:shadow-[0_0_10px_rgba(0,0,0,0.4)]">
            <div style={containerStyle2} className="absolute w-[1.9rem] h-[1.2rem] top-8 left-6 "></div>
            <div style={containerStyle} className="h-[17rem] w-[17rem] absolute left-[50%] -translate-x-[50%] top-[4rem] rounded-lg"></div>
            <div className="absolute bottom-3 left-[50%] -translate-x-[50%] w-[18rem] ">
                <p className="font-medium text-md border-b-[1px] border-b-gray-200">{eachPlayer.name}</p>
                <p>age: {eachPlayer.age}</p>
            </div>
        </div>
    </div>
  )
}



export default PlayerCard