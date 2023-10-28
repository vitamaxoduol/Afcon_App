import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import Qualifiers from "./Qualifiers/Qualifiers";
import SpecificCountry from "./Qualifiers/reusables/SpecificCountry";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import TicketStore from "./TicketStore";

import Comments from "./Qualifiers/reusables/Comments";


import HostCities from "./HostCities";


function Main() {

  
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Nav />}>
        <Route index element={<Home />} />
        <Route path="buy_ticket" element={<TicketStore />} />
        <Route path="/qualifiers" element={<Qualifiers />} />
        <Route path="/host_cities" element={<HostCities />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/comments' element={<Comments />} />
        <Route path="/countries/:id" element={<SpecificCountry/>} />
      </Route>
    )
  );
  return <RouterProvider router={routes} />
}

export default Main;
