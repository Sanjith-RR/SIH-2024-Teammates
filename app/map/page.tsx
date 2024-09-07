'use client';
import React, { useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';

// Custom component to add the WMS layer
const WMSLayer = () => {
  const map = useMap();

  useEffect(() => {
    const wmsLayer = L.tileLayer.wms('https://bhuvan-ras2.nrsc.gov.in/cgi-bin/LULC250K.exe', {
      layers: 'LULC250K_2223',
      format: 'image/png',
      transparent: true,
    });

    // Add the WMS layer to the map
    wmsLayer.addTo(map);

    // Cleanup when the component is unmounted
    return () => {
      map.removeLayer(wmsLayer);
    };
  }, [map]);

  return null;
};

const Page = () => {
  return (
    <main>
    <header className=" flex gap-4 p-4 text-center text-white" style={{backgroundColor:'#054569'}}>
      <img src="logo.svg" alt="" className="ml-[0.5vw]"/>
      <h1 className="text-3xl tracking-wider text-center mt-1">
        <span className="text-blue-500">S</span>hinka {" "}
        <span className="text-blue-500">J</span>inzai
      </h1>
    </header>
      <MapContainer center={[20.5937, 78.9629]} zoom={4} className="h-[89vh] w-screen">
        <TileLayer
          attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[13.0843, 80.2705]}>
          <Popup>Hello Chennai</Popup>
        </Marker>
        <WMSLayer />
      </MapContainer>
    </main>
  );
};

export default Page;
