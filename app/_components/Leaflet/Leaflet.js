"use client";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

function Leaflet({ position }) {
  return (
    <MapContainer
      style={{ width: "100%", height: "100%" }}
      center={position}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Handel position={position} />
    </MapContainer>
  );
}

function Handel({ position }) {
  const map = useMap();

  const icon = L.icon({
    iconUrl: "/./images/icon-marker.png",
    iconSize:[25,40],
    iconAnchor:[12.5,40]
  });
  L.marker(position, { icon }).addTo(map);
}

export default Leaflet;
