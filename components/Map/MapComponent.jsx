// components/MapComponent.js
'use client';

import React, { useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

const WMSLayer = () => {
  useEffect(() => {
    const wmsLayer = L.tileLayer.wms('https://bhuvan-ras2.nrsc.gov.in/cgi-bin/LULC250K.exe', {
      layers: 'LULC250K_2223',
      format: 'image/png',
      transparent: true,
    });

    return () => {
      wmsLayer.remove();
    };
  }, []);

  return null;
};

const MapComponent = () => {
  return (
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
  );
};

export default MapComponent;
