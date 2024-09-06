import React from "react";
import "./header.css";


const Header: React.FC = () => {
  return (
    <header className="header flex gap-4 ">
      <img src="logo.svg" alt="" className="ml-[0.5vw]"/>
      <h1 className="text-3xl tracking-wider">
        <span className="text-blue-500">S</span>hinka {" "}
        <span className="text-blue-500">J</span>inzai
      </h1>
    </header>
  );
}

export default Header;
