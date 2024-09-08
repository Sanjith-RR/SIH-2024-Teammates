import { useRouter } from "next/navigation";
import React from "react";

const LandingPage = () => {
  const navigate=useRouter();
  return (
    <div className="h-screen w-screen bg-gradient-to-b from-[#347092] to-[#5aa6d9] flex flex-col">
      {/* Search Bar Header */}
      <header className="h-[10vh] bg-blue-950 flex items-center justify-center">
        <div className="bg-white w-[90%] md:w-[60%] lg:w-[30%] rounded-sm flex justify-between h-[50%]">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 m-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search Location"
              className="ml-2 w-full"
            />
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 m-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0z"
            />
          </svg>
        </div>
      </header>
        {/* Navbar */}
      <header className="w-full flex justify-between h-[7vh] items-center p-6   text-white shadow-md">
        <h1 className="text-2xl font-bold">Shinka Jinzai</h1>
        <nav className="flex w-[50%] justify-around">
          <button onClick={(e)=>navigate.push("/map")}> Map </button>
          <button onClick={(e)=>navigate.push("/demo")}> Demo</button>
          <button onClick={(e)=>navigate.push("/about")}>About us</button>
        </nav>
        <button className="border px-4 py-2 rounded text-white hover:bg-white hover:text-[#0a2540]">
          Get Started
        </button>
      </header>
      {/* Main Content */}
      <main className="flex-grow relative flex justify-center bg-[radial-gradient(circle_at_right_center,_white,_transparent_10%)] backdrop-blur-2xl" style={{ backgroundSize: '100% 600%',backgroundPosition: 'right center' }}>
        {/* Circular Logo */}
        <div
          className="bg-blue-950 rounded-full flex items-center justify-end text-center text-2xl md:text-3xl lg:text-4xl absolute text-white"
          style={{
            width: "30vw",
            height: "30vw",
            left: "-1%",
            top: "-17%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="mt-[25vh] mr-[3vw] text-[2vw]">
            <span className="text-blue-700">S</span>hinza{" "}
            <span className="text-blue-700">J</span>inzai
          </div>
        </div>
        
        {/* Main Section */}
        <div className="text-center text-white mt-[7vh] z-10">
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-4">
            Welcome to Shinka Jinzai!
          </h2>
          <div className="relative mt-[15vh] w-[70%]">
              <p className="text-3xl lg:text-3xl font-semibold mb-6">
                Transforming Satellite Imagery into Actionable Visual Stories
              </p>
              <p className="text-md lg:text-lg mb-10 max-w-2xl mx-auto">
                We elevate decision-making through clear, actionable visuals powered
                by the latest in satellite technology and intelligent video
                generation.
              </p>
              {/* Learn More Button */}
              <a
                href="#"
                className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 inline-block font-semibold"
              >
                Learn More &rarr;
              </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
