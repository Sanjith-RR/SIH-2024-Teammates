// components/MapWithLeaflet.js
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';

// Dynamically load leaflet and its WMS plugin
const MapWithLeaflet = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div>Loading map...</div>; // Render nothing during SSR
  }

  const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
  const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
  const useMap = dynamic(() => import('react-leaflet').then(mod => mod.useMap), { ssr: false });

  // Import the leaflet and WMS plugin
  const L = dynamic(() => import('leaflet'), { ssr: false });
  const WMSPlugin = dynamic(() => import('leaflet.wms'), { ssr: false });

  const WMSLayer = () => {
    const map = useMap();
    useEffect(() => {
      if (L && L.wms) { // Check if L and L.wms exist before creating the layer
        const wmsLayer = L.tileLayer.wms('https://bhuvan-ras2.nrsc.gov.in/cgi-bin/LULC250K.exe', {
          layers: 'LULC250K_2223',
          format: 'image/png',
          transparent: true,
        });
  
        wmsLayer.addTo(map);
  
        return () => {
          wmsLayer.remove();
        };
      }
    }, [map]);
  
    return null;
  };
  

  return (
    <MapContainer center={[20.5937, 78.9629]} zoom={4} className="h-full w-full">
      <TileLayer
        attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <WMSLayer />
    </MapContainer>
  );
};

export default MapWithLeaflet;
