import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import React, { useState } from "react";

const SignIn = () => {
  // State variables to store input values
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const goHome = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    // Define the API endpoint. Update this URL to point to your backend endpoint.
    const apiEndpoint = "http://localhost:5000/auth/login";

    try {
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (response.status === 200) {
        alert("Logged in successfully");
        sessionStorage.setItem("LOGINSTATUS", JSON.stringify(true));
        goHome("/");
      } else {
        alert(data.message || "Input correct credentials!");
      }

    } catch (error) {
      console.error("Error logging in:", error);
      alert("There was an error logging in. Please try again.");
    }
  }
  

  return (
    <div className="h-screen w-full font-poppins">
      <div className="flex justify-between">
        <Section className="w-[61%] h-screen hidden lg:flex text-white pl-16">
          <div className="  w-[35rem] ">
            <h1 className=" text-4xl mt-20 mb-20">
              <span className="font-extrabold">FIFA</span> ID
            </h1>
            <h1 className="font-medium text-[4rem]">
              Football at your fingertips.
            </h1>
            <p className="text-2xl font-medium">
              Sign up to access tickets, play games and stay up to date on FIFA
              AFCON 24™ qualification!
            </p>
          </div>
        </Section>
        <section className="flex-1 flex justify-center">
          <form className=" w-[73%] mt-20" onSubmit={handleSubmit}>
            <h1 className="font-medium text-4xl mt-5">Sign In</h1>
            <div className="mt-10">
              <label className="font-medium text-[1.1rem]">Email</label>
              <input
                className="bg-[#e8f0fe] h-[3rem] w-full border-b-[1px] border-gray-400 pl-3 outline-none"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Update email state
                required
              />
            </div>
            <div className="mt-10">
              <label className="font-medium text-[1.1rem]">Password</label>
              <input
                className="bg-[#e8f0fe] h-[3rem] w-full border-b-[1px] border-gray-400 pl-3 outline-none"
                placeholder="Enter password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Update password state
                required
              />
            </div>
            <button
              type="submit"
              className="mt-5 mb-5 bg-blue-500 hover:bg-blue-600 py-3 px-7 rounded-3xl text-white text-sm uppercase"
            >
              Sign In
            </button>
            <p className="mb-8 text-blue-600 hover:text-blue-900 text-md text-left cursor-pointer">
              Forgotten your password?
            </p>

            <p className="mb-2 text-left">Don&apos;t have an account?</p>
            <button
              type="button"
              className="border-[1px] border-black rounded-3xl py-3 px-7 uppercase text-sm"
            >
              <NavLink to="/signup">Sign Up</NavLink>
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

const Section = styled.section`
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2)),
    url("https://store.fifa.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fei8z56ft9sxn%2F3wa57BpfnVpNqwaRLnkaRF%2Fac294a0e6f715fb77768a43261814551%2FESP_NEW.png&w=640&q=75");
  background-size: 100% 100%;
  // background-color:red;
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: scroll;
`;

export default SignIn;
