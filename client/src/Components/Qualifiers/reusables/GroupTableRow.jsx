import {NavLink} from "react-router-dom";
const GroupTableRow = ({No,onEachCountry}) => {  
  return (
    <tr className="h-[4rem] border-b-[1px] border-b-gray-300">
        <td className="text-center text-sm"><span className="mr-6">{No} </span> <NavLink to={`/countries/${onEachCountry.id}`}>{onEachCountry.name}</NavLink></td>
        {/* <td className="text-center"></td> */}
        <td className="text-center text-sm">4</td>
        <td className="text-center text-sm">{4-No}</td>
        <td className="text-center text-sm">1</td>
        <td className="text-center text-sm">0</td>
        <td className="text-center text-sm">{4-No}</td>
        <td className="text-center text-sm font-semibold">{7-No}</td>
    </tr>
  )
}

export default GroupTableRow