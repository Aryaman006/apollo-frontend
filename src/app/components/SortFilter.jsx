"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { TbArrowsUpDown } from "react-icons/tb"; // Sort icon

const SortFilter = ({ onSortChange }) => {
  const [sortValue, setSortValue] = useState("relevance");

  const handleChange = (e) => {
    const value = e.target.value;
    setSortValue(value);
    onSortChange(value);
  };

  const sortOptions = {
    relevance: "Relevance",
    availability: "Availability",
    rating: "Mostly liked",
    nearby: "Nearby",
    experience: "Years of Experience",
    // experienceHigh: "Experience: High to Low",
    // experienceLow: "Experience: Low to High",
    priceLow: "Price: Low to High",
    priceHigh: "Price: High to Low",
  };
  
  

  return (
    <div className="mb-4 flex items-center gap-3">
      <div className="relative md:hidden">
        {/* Box containing the select dropdown with distinct styles in small screen */}
        <div className="flex items-center border bg-[#f0f8ff] border-[#007C91] rounded-lg font-medium text-[#007C91] py-1 px-2">
          {/* The icon inside the box */}
          {/* <TbArrowsUpDown className="text-lg mr-2" /> */}
          
          {/* Display the selected option text inside the box */}
          <span className="text-md font-semibold">{sortOptions[sortValue]}</span>

          {/* Chevron icon on the right inside the box */}
          <FaChevronDown className="text-[#007C91] text-sm ml-2" />
        </div>

        {/* The actual select dropdown hidden behind the custom design */}
        <select
          value={sortValue}
          onChange={handleChange}
          className="appearance-none bg-transparent p-3 text-xs outline-none absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
        >
          <option value="relevance">Relevance</option>
          <option value="availability">Availability</option>
          <option value="rating">Mostly liked</option>
          <option value="nearby">Nearby</option>
          <option value="experience">Years of Experience</option>
          <option value="priceLow">Price: Low to High</option>
          <option value="priceHigh">Price: High to Low</option>
        </select>
      </div>
      <div className="relative hidden md:block">
        {/* Box containing the select dropdown with distinct styles in small screen */}
        <div className="flex items-center border  rounded-lg text-sm py-2 px-2">
          {/* The icon inside the box */}
          <TbArrowsUpDown className="text-lg mr-2" />
          
          {/* Display the selected option text inside the box */}
          <span className="text-md">{sortOptions[sortValue]}</span>

          {/* Chevron icon on the right inside the box */}
          <FaChevronDown className=" text-sm ml-2" />
        </div>

        {/* The actual select dropdown hidden behind the custom design */}
        <select
          value={sortValue}
          onChange={handleChange}
          className="appearance-none bg-transparent p-3 text-xs outline-none absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
        >
          <option value="relevance">Relevance</option>
          <option value="availability">Availability</option>
          <option value="rating">Mostly liked</option>
          <option value="nearby">Nearby</option>
          <option value="experience">Years of Experience</option>
          <option value="priceLow">Price: Low to High</option>
          <option value="priceHigh">Price: High to Low</option>
        </select>
      </div>
    </div>
  );
};

export default SortFilter;
