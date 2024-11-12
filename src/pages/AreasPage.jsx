import React, { useState } from "react";
import { MapContainer, TileLayer, Polygon } from "react-leaflet";

const AreasPage = () => {
  const [expandedCounty, setExpandedCounty] = useState(null);

  // Coordinates for predefined areas
  const bucksCountyCoords = [
    [40.345, -75.078],
    [40.345, -74.978],
    [40.445, -74.978],
    [40.445, -75.078],
  ];

  const montgomeryCountyCoords = [
    [40.245, -75.178],
    [40.245, -75.078],
    [40.345, -75.078],
    [40.345, -75.178],
  ];

  const toggleCounty = (county) => {
    setExpandedCounty(expandedCounty === county ? null : county);
  };

  return (
    <section className="relative z-0 bg-[#0F0F0F] text-white py-12 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">The Locals Detailing</h2>
        <p className="text-lg text-gray-400 mb-6">
          We’re currently serving Bucks & Montgomery counties in PA.
        </p>

        {/* Map Section */}
        <div className="relative z-0 mb-8">
          <MapContainer
            center={[40.345, -75.078]} // Center the map (example coordinates)
            zoom={10}
            style={{ height: "400px", width: "100%", zIndex: 0 }} // Ensure lower z-index
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {/* Bucks County Area */}
            <Polygon
              positions={bucksCountyCoords}
              color="#2DCBE0"
              fillOpacity={0.3}
            />
            {/* Montgomery County Area */}
            <Polygon
              positions={montgomeryCountyCoords}
              color="#5E297F"
              fillOpacity={0.3}
            />
          </MapContainer>
        </div>

        {/* Areas List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left text-white">
          {/* Bucks County */}
          <div>
            <h3
              className="text-xl ml-12 font-bold flex items-center cursor-pointer"
              onClick={() => toggleCounty("bucks")}
            >
              Bucks County{" "}
              <span className="text-[#2DCBE0] text-lg ml-2">
                {expandedCounty === "bucks" ? "▲" : "▼"}
              </span>
            </h3>
            {expandedCounty === "bucks" && (
              <ul className="list-disc list-inside text-gray-300 mt-2">
                <li>Bedminster Township</li>
  <li>Bensalem Township</li>
  <li>Bridgeton Township</li>
  <li>Bristol Borough</li>
  <li>Bristol Township</li>
  <li>Buckingham Township</li>
  <li>Chalfont Borough</li>
  <li>Doylestown Borough</li>
  <li>Doylestown Township</li>
  <li>Dublin Borough</li>
  <li>Durham Township</li>
  <li>East Rockhill Township</li>
  <li>Falls Township</li>
  <li>Haycock Township</li>
  <li>Hilltown Township</li>
  <li>Hulmeville Borough</li>
  <li>Ivyland Borough</li>
  <li>Langhorne Borough</li>
  <li>Langhorne Manor Borough</li>
  <li>Lower Makefield Township</li>
  <li>Lower Southampton Township</li>
  <li>Middletown Township</li>
  <li>Milford Township</li>
  <li>Morrisville Borough</li>
  <li>New Britain Borough</li>
  <li>New Britain Township</li>
  <li>New Hope Borough</li>
  <li>Newtown Borough</li>
  <li>Newtown Township</li>
  <li>Nockamixon Township</li>
  <li>Northampton Township</li>
  <li>Penndel Borough</li>
  <li>Perkasie Borough</li>
  <li>Plumstead Township</li>
  <li>Quakertown Borough</li>
  <li>Richland Township</li>
  <li>Richlandtown Borough</li>
  <li>Riegelsville Borough</li>
  <li>Sellersville Borough</li>
  <li>Silverdale Borough</li>
  <li>Solebury Township</li>
  <li>Springfield Township</li>
  <li>Telford Borough</li>
  <li>Tinicum Township</li>
  <li>Trumbauersville Borough</li>
  <li>Tullytown Borough</li>
  <li>Upper Makefield Township</li>
  <li>Upper Southampton Township</li>
  <li>Warminster Township</li>
  <li>Warrington Township</li>
  <li>Warwick Township</li>
  <li>West Rockhill Township</li>
  <li>Wrightstown Township</li>
  <li>Yardley Borough</li>
              </ul>
            )}
          </div>

          {/* Montgomery County */}
          <div>
            <h3
              className="text-xl font-bold flex items-center cursor-pointer"
              onClick={() => toggleCounty("montgomery")}
            >
              Montgomery County{" "}
              <span className="text-[#2DCBE0] text-lg ml-2">
                {expandedCounty === "montgomery" ? "▲" : "▼"}
              </span>
            </h3>
            {expandedCounty === "montgomery" && (
              <ul className="list-disc list-inside text-gray-300 mt-2">
               <li>Abington Township</li>
  <li>Ambler Borough</li>
  <li>Bridgeport Borough</li>
  <li>Bryn Athyn Borough</li>
  <li>Cheltenham Township</li>
  <li>Collegeville Borough</li>
  <li>Conshohocken Borough</li>
  <li>Douglass Township</li>
  <li>East Greenville Borough</li>
  <li>Hatboro Borough</li>
  <li>Hatfield Borough</li>
  <li>Hatfield Township</li>
  <li>Horsham Township</li>
  <li>Jenkintown Borough</li>
  <li>Lansdale Borough</li>
  <li>Limerick Township</li>
  <li>Lower Frederick Township</li>
  <li>Lower Gwynedd Township</li>
  <li>Lower Merion Township</li>
  <li>Lower Moreland Township</li>
  <li>Lower Pottsgrove Township</li>
  <li>Lower Providence Township</li>
  <li>Lower Salford Township</li>
  <li>Marlborough Township</li>
  <li>Montgomery Township</li>
  <li>Narberth Borough</li>
  <li>New Hanover Township</li>
  <li>Norristown Municipality</li>
  <li>North Wales Borough</li>
  <li>Pennsburg Borough</li>
  <li>Perkiomen Township</li>
  <li>Plymouth Township</li>
  <li>Pottstown Borough</li>
  <li>Red Hill Borough</li>
  <li>Rockledge Borough</li>
  <li>Royersford Borough</li>
  <li>Salford Township</li>
  <li>Schwenksville Borough</li>
  <li>Skippack Township</li>
  <li>Souderton Borough</li>
  <li>Springfield Township</li>
  <li>Telford Borough</li>
  <li>Towamencin Township</li>
  <li>Trappe Borough</li>
  <li>Upper Dublin Township</li>
  <li>Upper Frederick Township</li>
  <li>Upper Gwynedd Township</li>
  <li>Upper Hanover Township</li>
  <li>Upper Merion Township</li>
  <li>Upper Moreland Township</li>
  <li>Upper Pottsgrove Township</li>
  <li>Upper Providence Township</li>
  <li>Upper Salford Township</li>
  <li>West Conshohocken Borough</li>
  <li>West Norriton Township</li>
  <li>West Pottsgrove Township</li>
  <li>Whitemarsh Township</li>
  <li>Whitpain Township</li>
  <li>Worcester Township</li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AreasPage;
