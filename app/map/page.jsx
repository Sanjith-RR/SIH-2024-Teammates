'use client'; // This ensures the page is rendered only on the client-side

import React, { useEffect, useState } from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { useRouter } from 'next/navigation';

const WMSLayer = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensure this runs only on the client-side

    if (isClient) {
      const map = L.map('map').setView([20.5937, 78.9629], 4);
      L.tileLayer.wms('https://bhuvan-ras2.nrsc.gov.in/cgi-bin/LULC250K.exe', {
        layers: 'LULC250K_2223',
        format: 'image/png',
        transparent: true,
      }).addTo(map);
    }
  }, [isClient]);

  return null;
};

const Page = () => {
  const navigate = useRouter();

  return (
    <main>
      <header className="flex gap-4 p-4 text-center text-white" style={{ backgroundColor: '#054569' }}>
        <img src="logo.svg" alt="Logo" className="ml-[0.5vw]" />
        <h1 className="text-3xl tracking-wider text-center mt-1 cursor-pointer" onClick={() => navigate.push('/')}>
          <span className="text-blue-500">S</span>hinka <span className="text-blue-500">J</span>inzai
        </h1>
      </header>
      <div id="map" className="h-[89vh] w-screen">
        {isClient && (
          <MapContainer center={[20.5937, 78.9629]} zoom={4} className="h-full w-full">
            <TileLayer
              attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[13.0843, 80.2705]}>
              <Popup>Hello Chennai</Popup>
            </Marker>
            <WMSLayer />
          </MapContainer>
        )}
      </div>
    </main>
  );
};

export default Page;
