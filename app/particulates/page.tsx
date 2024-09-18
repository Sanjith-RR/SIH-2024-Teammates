"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef } from "react";

const EarthViewer = () => {
  const iframeRef = useRef(null);
  const navigate=useRouter();

  return (
    <div>
      <header className="z-20 relative max-h-screen flex gap-4 p-4 text-center text-white overflow-hidden" style={{backgroundColor:'#054569'}}>
        <img src="logo.svg" alt="" className="ml-[0.5vw]"/>
        <h1 className="text-3xl tracking-wider text-center mt-1 cursor-pointer" onClick={() => navigate.push('/')}>
          <span className="text-blue-500">S</span>hinka {" "}
          <span className="text-blue-500">J</span>inzai
        </h1>
      </header>
      <div className="absolute top-[9vh] z-0 w-full h-[93vh] overflow-hidden">
        <iframe
          ref={iframeRef}
          src="https://earth.nullschool.net/#current/particulates/surface/currents/overlay=pm2.5/equirectangular"
          title="Earth Viewer"
          className="absolute top-0 left-0 w-full h-full border-0"
          scrolling="no"
        sandbox="allow-same-origin allow-scripts allow-forms"
        />
      </div>
    </div>
  );
}  

export default EarthViewer;
