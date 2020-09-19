import React, { useContext } from 'react';
import IpContext from '../context/IpContext';
import { Map as MapLeaflet, Marker, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import icon from '../images/icon-location.svg';
import 'leaflet/dist/leaflet.css';
export const pointerIcon=new L.Icon({
  iconUrl: icon,
  iconRetinaUrl: icon,
  iconAnchor: [55, 55],
  iconSize: [40, 55],
})


const Map = () => {
  const { info }=useContext(IpContext);
  let position=[51.5, -0.1];
  if (info) {
    position=[info?.location?.lat, info?.location?.lng];
  }
  return (
    
    <MapLeaflet center={position} zoomControl={false} touchZoom={false} dragging={false} keyboard={false} boxZoom={false} zoom={13} scrollWheelZoom={false} showCoverageOnHover={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
      />
      <Marker position={position} icon={pointerIcon}>
      </Marker>
    </MapLeaflet>
    
  );
};

export default Map;