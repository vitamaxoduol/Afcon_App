import { useEffect, useState } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
} from "react-router-dom";
// import React, { useEffect, useState } from "react";
// import { Link, NavLink, Outlet } from "react-router-dom";
import Footer from "./Footer.jsx";
import "../StyleSheets/nav.css";
import Comments from "./Qualifiers/reusables/Comments.jsx";
import { Box, Fade, Modal, Typography } from "@mui/material";
import Backdrop from '@mui/material/Backdrop';
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import { useMyCustomHook } from "./Context/AppContext.jsx";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const {userIsLoged,setUserIsLoged}=useMyCustomHook()
  const [open3, setOpen3] = useState(false);
  const handleOpen3 = () => setOpen3(true);
  const handleClose3 = () => setOpen3(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [userDetail, setUserDetail] = useState({});
  const navigate = useNavigate();

  const { pathname } = useLocation();

  const MobileNavStyle = {
    fontVariationSettings: '"FILL" 0, "wght" 200, "GRAD" -25, "opsz" 24"',
    fontSize: "30px",
  };

  /* _____Menu operations */
  const openMenu = (e) => {
    e.stopPropagation();
    setMenuOpen(true);
  };
  
  function checkUser() {
    if (!userIsLoged) {
      navigate("/signin");
      // alert("Hi")
    } else {
      setProfileOpen(true);
      // alert("Hello")
    }
  }
  function logOut() {
    localStorage.setItem("useData", {});
    setUserDetail({ name: "", email: "", password: "" });
    setProfileOpen(false);
    setUserIsLoged(false);
    sessionStorage.clear();
  }

  useEffect(() => {
    const handleBodyClick = (event) => {
      if (!event.target.closest(".n-links")) {
        setMenuOpen(false);
      }
      if (localStorage.getItem("userData") !== null) {
        setUserIsLoged(true);
      }
    };

    document.body.addEventListener("click", handleBodyClick);

    return () => {
      // Cleanup function to remove the event listener when the component unmounts
      document.body.removeEventListener("click", handleBodyClick);
    };
  }, []);

  useEffect(() => {
    if (localStorage.getItem("userData") !== null) {
      const userData = localStorage.getItem("userData");
      const userObj = JSON.parse(userData);
      setUserDetail(userObj);
      
    }
    const LOGINSTATUS=JSON.parse(sessionStorage.getItem("LOGINSTATUS"));
    setUserIsLoged(LOGINSTATUS);
  }, [userIsLoged]);
  return (
    <div className="">
      <nav
        className={`${
          pathname == "/signin" || pathname == "/signup" ? "hidden" : ""
        }`}
      >
        <div className="top_header">
          <h1 className="name-logo">AFCON</h1>
          {/* _____________________Important desk links */}
          <div className="important-link">
            <ul className="fxsb">
              <li>
                <Link to="/buy_ticket">Buy Ticket</Link>
              </li>
              {/* <li>
                <Link to="/">AFCON store</Link>
              </li> */}
              {/* <li>
                <Link to="/">Inside Afcon</Link>
              </li> */}
            </ul>
          </div>
        </div>
        <div className="fxsb">
          <h1 className="name-logo mobile">AFCON</h1>
          <div className="fxs">
            <div className="site-logo">
              <div className="logo-container">
                <img
                  src="https://i.pinimg.com/564x/2d/66/37/2d66377a5c7c0c621262c4f2cfdc4808.jpg"
                  alt="CAF"
                />
              </div>
            </div>
            <div className={menuOpen ? "n-links-container " : ""}>
              <div
                className={menuOpen ? "n-links open-mobile-menu" : "n-links"}
              >
                <ul className="fxs">
                  <li>
                    <Link to="/">AFCON 2024 Teams</Link>
                    <hr />
                  </li>
                  <li>
                    <Link to="/qualifiers">Qualifiers</Link>
                    <hr />
                  </li>
                  <li>
                    <Link onClick={handleOpen3}>Comments</Link>

                    <hr />
                  </li>
                  <li>
                    <Link to="/host_cities">Host Countries & Cities</Link>
                    <hr />
                  </li>
                  {/* <li>
                    <Link to="/">Register your Interests</Link>
                    <hr />
                  </li> */}
                </ul>

                {/* _____________________Important mobile links */}

                <div className="important-link mobile ">
                  <ul className="fxsb">
                    <li>
                      <Link to="/buy_ticket">Buy Ticket</Link>
                    </li>
                    <li>
                      <Link to="/">AFCON store</Link>
                    </li>
                    <li>
                      <Link to="/">Inside Afcon</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>


          
          <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered" className='border-none'>
        <div className="profile">
          <span className="material-symbols-outlined text-white">person</span>
        </div>
        </Button>
            </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        {/* <DropdownItem key="new" textValue="user" className="bg-orange-500 rounded-lg px-3 hover:bg-orange-600 py-2 hover:text-black mb-2 text-center" ><NavLink to='/signin' className='text-sm uppercase text-white'>Sign In</NavLink></DropdownItem> */}
        {/* <DropdownItem key="copy" textValue="user" className="bg-green-600 rounded-lg px-3 py-2 hover:bg-green-700 hover:text-black mb-2 text-center"><NavLink to='/signup' className='text-sm uppercase text-white'>Sign Up</NavLink></DropdownItem> */}
        <DropdownItem key="copy2" onClick={checkUser} textValue="user" className="bg-blue-900 rounded-lg px-3 py-2 hover:bg-blue-800 hover:text-black mb-2 text-center"><NavLink to='' className='text-sm uppercase text-white'>{userIsLoged?"Check Profile":"Log Out"}</NavLink></DropdownItem>
      </DropdownMenu>
    </Dropdown>
            
          
        </div>


        {/* ___________Bottom mobile nav */}
        <div className="mobile-bottom-nav mobile">
          <ul>
            <NavLink to="/">
              <li>
                <span
                  className="material-symbols-outlined"
                  style={MobileNavStyle}
                >
                  home
                </span>{" "}
                Home
              </li>
            </NavLink>
            <NavLink to="host_cities">
              {" "}
              <li>
                <span
                  className="material-symbols-outlined"
                  style={MobileNavStyle}
                >
                  brightness_high
                </span>{" "}
                Hosts
              </li>
            </NavLink>
            <NavLink to="/">
              <li>
                <span
                  className="material-symbols-outlined"
                  style={MobileNavStyle}
                >
                  sports_score
                </span>{" "}
                Scores
              </li>
            </NavLink>

            <li onClick={openMenu}>
              <span
                className="material-symbols-outlined"
                style={MobileNavStyle}
              >
                menu
              </span>{" "}
              Menu
            </li>
          </ul>
        </div>
        {/* ___________Profile pop */}
        <div
          className="profile-container"
          style={profileOpen ? { display: "block" } : { display: "none" }}
        >
          <div className="profile-info">
            <div className="close-btn" onClick={() => setProfileOpen(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-square-x"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#000000"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z" />
                <path d="M9 9l6 6m0 -6l-6 6" />
              </svg>
            </div>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEXk5ueutLeqsbTn6eqpr7PJzc/j5ebf4eLZ3N2wtrnBxsjN0NLGysy6v8HT1tissra8wMNxTKO9AAAFDklEQVR4nO2d3XqDIAxAlfivoO//tEOZWzvbVTEpic252W3PF0gAIcsyRVEURVEURVEURVEURVEURVEURVEURVEURVEURflgAFL/AirAqzXO9R7XNBVcy9TbuMHmxjN6lr92cNVVLKEurVfK/zCORVvW8iUBnC02dj+Wpu0z0Y6QlaN5phcwZqjkOkK5HZyPAjkIjSO4fIdfcOwFKkJlX4zPu7Ha1tIcwR3wWxyFhRG6g4Je0YpSPDJCV8a2Sv2zd1O1x/2WMDZCwljH+clRrHfWCLGK8REMiql//2si5+DKWKcWeAGcFMzzNrXC/0TUwQ2s6+LhlcwjTMlYsUIQzPOCb7YBiyHopyLXIEKPEkI/TgeuiidK/R9FniUDOjRDpvm0RhqjMyyXNjDhCfIMYl1gGjIMIuYsnGEYRMRZOMMunaLVwpWRW008v6fYKDIzxCwVAeNSO90BJW6emelYBRF/kHpYGVaoxTDAaxOFsfP9y8hpJ4xd7gOcij7JNGQ1EYFgkPJa1jQEiYZXRaRINKxSDUW9n+FT82lSKadkiru9/4XPqSLWOekGPoY05TAvLm9orm+YWuwHoBHkZKijNBJGmeb61eL6Ff/6q7bLr7yvv3vKGhpDRjvgjGaPz+gUg6YgcvpyAR2FIZ9U6nEEyZRTovmEU32KichpGn7C17XrfyH9gK/c0CMP05HZIM2uf9sEveizKveBy9/6Qt7o89ne33D525cfcIMW6ab+TMEukQbQbu+xu7X3A9bChmWaCeAkG17bpntwXgWxHaMzGPmUaR5dQZiKqRVeUZ3047fi3nAu28h4CHxCsZAgmEH8Y27jJAhm8c+5RQzRQNVGhVFSfxOYIjp/pP7RxzjevYXVGf4eLt+BJ1vCuLuLkrgABgCGXZ2wik5uty+oBvNirI6mkzhAf4Gsb58Hcm67Jzd+KwD10BYPLL3e0MjvKrgAULnOfveF/O4N2Xb9BZom3gJes3F9X5Zze8/6Yt09b4CrqsEjUv8oFBaR2rl+6CZr2xVrp24o/WitBKuGrrpl1+bFkmK2qXTON4VpbdfLa7o7y/WdLxG7lm2Lqh2clOwTegbvc/vj2U78CwhA87Bn8G5Nk3eOb0Nsr9flz3sG78UUtue4kpv1xvjg3TMay62BMlTlP+vrOMnJsRmt/ze0jsfkPPYdAH57hK+34PeOyc8XIXu5xT2HsUkdZz+adwg8HGFfQ3K5jtDvbUiO4Di9/ywHGrL88pDizZ++oTp+an+SMX/ndymUCwmHMdO7yuOx83pUx/eEMU0AvxWndwgidAqOZ8ypCwdEfvvEo6D9HwpA8wzvmOJEqAg9ySu8g4x0Hb9hSB/BANEKJ+LbPBU0lzbAJs4xt1AoshKkUGQmiH8/jJ0gdhTTLmSegHlPE0oOdXALnqDjKYh3px//fSgSWG8UqfrrIICzYYSJXRr9BSPbpNzw7gBjKjKOYI7ReIGqQRIap5+5MdjyvuDkExvGeXSlONWZAP3/AZBwJohU7QJRGU+cTVH18ELmRPNBmibW6MT/k1b0XhdkRBvyT6SB6EYv/GvhSmRNpGngRULsAlxMCGNXp7w3FfdEbTEEDdLI9TdIKRUzUesa3I461ER8cpNT7gMRhpKmYVS9ELOgCUQsa4SsulciKiLbY+AnHD8cpuhISsnxpamI84sbDq9qYJgf8wiiOBrC7Ml7M7ZECCqKoiiKoiiKoiiKoijv5AvJxlZRyNWWLwAAAABJRU5ErkJggg=="
              alt=""
            />
            <div className="user-info">
              {/* <p>User name: {userDetail.name}</p> */}
              {/* <p>Email: {userDetail.email}</p> */}
              <button className="log-out-btn" onClick={logOut}>
                Log Out
              </button>
            </div>
          </div>
        </div>




      </nav>
      <main className={` ${pathname=='/signin'|| pathname=='/signup'?'mt-0 pt-0':'lg:mt-[1.5rem] mt-[1.14rem]'}`}>
        <Outlet />
      </main>
      <Footer /> 

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open3}
        onClose={handleClose3}
        closeaftertransitionslots={{ backdrop: Backdrop }}
        slotProps={{ backdrop: { timeout: 500 } }}
      >
        <Fade in={open3}>
          <Box className="absolute top-[50%] rounded-lg overflow-hidden left-[50%] translate-x-[-50%] translate-y-[-50%] bg-secondary w-full lg:w-[50rem] h-[40rem] pt-8 lg:pt-0">
            <Typography
              id="transition-modal-title"
              variant="h6"
              component="h2"
              className=""
            >
              <Comments handleClose3={handleClose3} />
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default Nav;
