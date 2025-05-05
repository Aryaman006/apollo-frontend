"use client";
import React, { useState } from "react";
import { X } from "lucide-react";

const Filter = ({ filters, setFilters, setUserLocation, isMobile = false, onClose }) => {
  const [showAllLanguage, setShowAllLanguage] = useState(false);
  const [locationStatus, setLocationStatus] = useState("");

  const toggleFilter = (category, value) => {
    setFilters((prev) => {
      const current = prev[category];
      return {
        ...prev,
        [category]: current.includes(value)
          ? current.filter((v) => v !== value)
          : [...current, value],
      };
    });
  };

  const clearAll = () =>
    setFilters({
      mode: [],
      experience: [],
      fees: [],
      language: [],
      facility: [],
    });

  const getLocationAndFilter = () => {
    if (!navigator.geolocation) {
      setLocationStatus("Geolocation is not supported.");
      return;
    }

    setLocationStatus("Getting location...");

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation({ lat: latitude, lon: longitude });
        setLocationStatus("Location verified ✔️");
      },
      (error) => {
        setLocationStatus("Failed to get location.");
        console.error(error);
      }
    );
  };

  const checkbox = (category, value, label) => (
    <label className="block text-sm text-gray-800 mb-2">
      <input
        type="checkbox"
        className="mr-2 accent-[#007C91]"
        checked={filters[category]?.includes(value)}
        onChange={() => toggleFilter(category, value)}
      />
      {label}
    </label>
  );

  return (
    <div
      className={`${
        isMobile
          ? "fixed top-0 left-0 w-80 h-full bg-white z-50 shadow-lg p-4 overflow-y-auto"
          : "w-72 p-4 bg-white h-screen overflow-y-auto hidden md:block"
      }`}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-base font-bold">Filters</h2>
        {isMobile ? (
          <button onClick={onClose}>
            <X className="text-gray-700" />
          </button>
        ) : (
          <button
            onClick={clearAll}
            className="text-sm font-semibold text-[#007C91] hover:underline"
          >
            Clear All
          </button>
        )}
      </div>

      {/* Show Doctors Near Me */}
      <div className="flex justify-center mb-4">
        <button
          onClick={getLocationAndFilter}
          className="w-full border-2 border-[#007C91] text-[#007C91] text-xs py-2 font-semibold rounded-md hover:bg-[#e6f9fb]"
        >
          Show Doctors Near Me
        </button>
      </div>
      {locationStatus && (
        <p className="text-xs text-center text-gray-600 mt-1">{locationStatus}</p>
      )}

      {/* Filters */}
      <div className="mb-5">
        <h3 className="font-bold mb-2 text-sm">Mode of Consult</h3>
        {checkbox("mode", "hospital", "Hospital Visit")}
        {checkbox("mode", "online", "Online Consult")}
      </div>

      <div className="mb-5">
        <h3 className="font-bold mb-2 text-sm">Experience (Years)</h3>
        {
          [ [0, 5], [6, 10], [11, 50] ].map(([min, max]) => (
            <label key={`${min}-${max}`} className="block text-sm mb-2">
              <input
                type="radio"
                name="experience"
                onChange={() => setFilters((prev) => ({ ...prev, experience: [min, max] }))}
                checked={JSON.stringify(filters.experience) === JSON.stringify([min, max])}
                className="mr-2"
              />
              {min}+ Years
            </label>
          ))
          
        }

      </div>

      <div className="mb-5">
        <h3 className="font-bold mb-2 text-sm">Fees (₹)</h3>
        {[ [0, 500], [501, 1000] ].map(([min, max]) => (
          <label key={`${min}-${max}`} className="block text-sm mb-2">
            <input
              type="radio"
              name="fees"
              onChange={() => setFilters((prev) => ({ ...prev, fees: [min, max] }))}
              checked={JSON.stringify(filters.fees) === JSON.stringify([min, max])}
              className="mr-2"
            />
            ₹{min} - ₹{max}
          </label>
        ))}
      </div>

      <div className="mb-5">
        <h3 className="font-bold mb-2 text-sm">Language</h3>
        {checkbox("language", "english", "English")}
        {checkbox("language", "hindi", "Hindi")}
        {checkbox("language", "telugu", "Telugu")}
        {showAllLanguage &&
          ["punjabi", "bengali", "marathi", "urdu", "gujrati", "tamil", "kannada", "oriya", "persian", "assamese"]
            .map((lang) => checkbox("language", lang, lang.charAt(0).toUpperCase() + lang.slice(1)))}
        <p
          className="text-[#007C91] text-sm mt-1 font-semibold cursor-pointer hover:underline"
          onClick={() => setShowAllLanguage(!showAllLanguage)}
        >
          {showAllLanguage ? "Show Less" : "+10 More"}
        </p>
      </div>

      <div className="mb-5">
        <h3 className="font-bold mb-2 text-sm">Facility</h3>
        {checkbox("facility", "apollo", "Apollo Hospital")}
        {checkbox("facility", "clinic", "Other Clinics")}
      </div>

      {isMobile && (
        <button
          onClick={clearAll}
          className="w-full mt-4 text-sm font-semibold text-[#007C91] hover:underline"
        >
          Clear All
        </button>
      )}
    </div>
  );
};

export default Filter;
