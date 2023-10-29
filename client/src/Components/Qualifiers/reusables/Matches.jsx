import { useEffect, useRef, useState } from "react";
import MatchCard from "./MatchCard";

const Matches = () => {
    const containerRef = useRef(null);
  const [isAtFarLeft, setIsAtFarLeft] = useState(true);
  const [isAtFarRight, setIsAtFarRight] = useState(false);
  const [addWidth, setAddWidth] = useState(false);
  

  useEffect(() => {
    const container = containerRef.current;

    const handleScroll = () => {
      setIsAtFarLeft(container.scrollLeft === 0);
      setIsAtFarRight(
        container.scrollLeft === container.scrollWidth - container.clientWidth
      );
    };

    container.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= containerRef.current.clientWidth;
    }
  };

  const handleScrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += containerRef.current.clientWidth;
    }
  };
  return (
    <div>
        <div className="relative">
            <div
              className={`matches ${addWidth?"h-fit pb-2": "h-[28rem]"} transition-all duration-800 lg:h-fit gap-y-4 overflow-y-hidden grid grid-cols-1 lg:flex lg:gap-4 lg:overflow-x-scroll`}
              ref={containerRef}
            >
              <MatchCard teamA="Ghana" teamB="Senegal" scoreA="1" scoreB="3" date="21 July 2023" />
              <MatchCard teamA="Algeria" teamB="Tunisia" scoreA="2" scoreB="0" date="24 July 2023"/>
              <MatchCard teamA="Ivory Coast" teamB="Nigeria" scoreA="1" scoreB="4" date="30 July 2023"/>
              <MatchCard teamA="Egypt" teamB="South Africa" scoreA="4" scoreB="3" date="3 August 2023"/>
              <MatchCard teamA="Kenya" teamB="Tanzania" scoreA="1" scoreB="0" date="3 August 2023"/>
              <MatchCard teamA="DRC" teamB="Morocco" scoreA="0" scoreB="2" date="21 July 2023"/>
            </div>
          
            <button onClick={(e)=>setAddWidth(!addWidth)} className="lg:hidden bg-blue-500 text-white text-sm py-1 px-3 rounded-lg hover:bg-blue-600">{addWidth?"See Less":"See More"}</button>

            {!isAtFarLeft > 0 && (
              <button
                className="absolute lg:block hidden top-[50%] -translate-y-[50%] text-red-500"
                onClick={handleScrollLeft}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.2}
                  stroke="currentColor"
                  className="w-10 h-11"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>
            )}
            {!isAtFarRight <
              containerRef.current?.scrollWidth -
                containerRef.current?.clientWidth && (
              <button
                className="absolute lg:block hidden top-[50%] -translate-y-[50%] right-0 text-red-500"
                onClick={handleScrollRight}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.2}
                  stroke="currentColor"
                  className="w-10 h-11"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            )}
          </div>
    </div>
  )
}

export default Matches