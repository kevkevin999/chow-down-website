import React from 'react';
import {
    MapContainer,
    TileLayer
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import "./Map.css";

const center = [47.655548, -122.303200];

function Map() {
    return (
        <MapContainer
            id="Map"
            center={center}
            zoom={15}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        </MapContainer>
    );
}

export default Map;