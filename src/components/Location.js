import React, { useState } from "react";
import { GOOGLE_MAPS_KEY } from "../utils/constants";

const Location = () => {
  const [address, setAddress] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const getMyLocation = () => {
    setIsLoading(true);
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          getAddress(position.coords.latitude, position.coords.longitude);
        },
        function (error) {
          console.error("Error getting location:", error);
          setAddress("Error getting location");
          setIsLoading(false);
        }
      );
    } else {
      console.log("Geolocation is not available in your browser");
      setAddress("Geolocation is not available");
      setIsLoading(false);
    }
  };

  const getAddress = async (lat, lng) => {
    try {
      console.log(`Fetching address for coordinates: ${lat}, ${lng}`);  
      console.log('Using API Key:', GOOGLE_MAPS_KEY);

      const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_MAPS_KEY}`);
      const data = await response.json();
      
      console.log('API Response:', data);

      if (data.results && data.results.length > 0) {
        setAddress(data.results[0].formatted_address);
      } else if(data.status === 'ZERO_RESULTS'){
        setAddress("No Address found for these coordinates");
      } else{
        console.error('Geocoding failed:', data.status, data.error_message);
        setAddress(`Address lookup failed: ${data.status}`);
      }
    } catch (error) {
      console.error("Error fetching address:", error);
      setAddress("Error fetching address");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center px-20 font-sans">
      <h2 className="mb-2 font-bold">My Location</h2>
      <input
        className="shadow-md border-gray-100 px-2 mx-2 h-[50px] w-10/12">
      </input>
      <button 
        onClick={getMyLocation} 
        disabled={isLoading}
        className="px-5 py-2 text-lg border-gray-400 rounded-sm cursor-pointer mb-5 shadow-md hover:text-orange-400"
      >
        {isLoading ? "Loading..." : "Get My Current Address Location"}
      </button>
      {address && (
        <div className="bg-gray-100 p-4 rounded-sm max-w-md break-words"
       >
          <strong>Address:</strong> {address}
        </div>
      )}
    </div>
  );
};

export default Location;