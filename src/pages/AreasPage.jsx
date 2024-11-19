import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import 'leaflet/dist/leaflet.css';

// Import the icon image (use PNG instead of SVG)
import mappinIcon from '../assets/icons/mappin.svg';

// Custom icon for the marker
const customIcon = new L.Icon({
  iconUrl: mappinIcon,
  iconSize: [48, 48], // Adjust the size as needed
  iconAnchor: [16, 41], // Point of the icon which will correspond to marker's location
  popupAnchor: [0, -41], // Point from which the popup should open relative to the iconAnchor
});

const AreasPage = () => {
  return (
    <section className="relative z-0 bg-[#0F0F0F] text-white py-12 px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* ... rest of your component */}
        <MapContainer
          center={[40.2495, -75.1348]}
          zoom={10}
          style={{ height: "400px", width: "100%", zIndex: 0 }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; OpenStreetMap contributors'
          />
          {/* Marker for Warrington */}
          <Marker position={[40.2495, -75.1348]} icon={customIcon}>
            <Popup>Warrington, PA</Popup>
          </Marker>
        </MapContainer>

        {/* Service Areas Text */}
        
        <p className="text-lg mt-6 text-gray-400">
        <p className="text-white mb-2">Based out of Warrington</p> Our mobile unit services Montgomery, Bucks, Chester, Delaware, Berks, and Philadelphia counties.
        </p>
      </div>
    </section>
  );
};

export default AreasPage;
