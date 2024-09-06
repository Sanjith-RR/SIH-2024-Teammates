'use client';
import React from 'react'
import "leaflet/dist/leaflet.css"
import { MapContainer ,TileLayer} from 'react-leaflet'
const page = () => {
  return (
    <MapContainer center={[48.8566, 2.3522]} zoom={13} className='h-screen w-screen' >
        <TileLayer
        attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
    </MapContainer>
  )
}

export default page