"use client";
import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import DoctorCard from "./components/DoctorCard";
import SortFilter from "./components/SortFilter";
import { GiSettingsKnobs } from "react-icons/gi";

export default function Home() {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({
    mode: [],
    experience: [],
    fees: [],
    language: [],
    facility: [],
  });
  const [sortOption, setSortOption] = useState("rating");
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [userLocation, setUserLocation] = useState(null);

  const apiEndpoint = "https://apollo-fbackend.onrender.com/api/list-doctor-with-filter";

  const toggleMobileFilter = () => {
    setIsMobileFilterOpen(!isMobileFilterOpen);
  };

  const getFilteredDoctors = async () => {
    setLoading(true);
    try {
      const queryParams = new URLSearchParams();

      if (filters.mode.length) queryParams.set("mode", filters.mode.join(","));
      if (filters.language.length) queryParams.set("language", filters.language.join(","));
      if (filters.facility.length) queryParams.set("facility", filters.facility.join(","));

      if (filters.experience[0]) queryParams.set("minExperience", filters.experience[0]);
      if (filters.experience[1]) queryParams.set("maxExperience", filters.experience[1]);

      if (filters.fees[0]) queryParams.set("minFee", filters.fees[0]);
      if (filters.fees[1]) queryParams.set("maxFee", filters.fees[1]);

      queryParams.set("sort", sortOption);
      console.log(filters.experience);
      

      const response = await fetch(`${apiEndpoint}?${queryParams.toString()}`);
      const data = await response.json();
      setDoctors(data.doctors);
    } catch (error) {
      console.error("Failed to fetch doctors:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getFilteredDoctors();
  }, [filters, sortOption, userLocation]);

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <div className="flex gap-6">
        <Filter filters={filters} setFilters={setFilters} setUserLocation={setUserLocation} />
        {isMobileFilterOpen && (
          <Filter
            filters={filters}
            setFilters={setFilters}
            setUserLocation={setUserLocation}
            isMobile={true}
            onClose={() => setIsMobileFilterOpen(false)}
          />
        )}

        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-4">
            Consult General Physicians Online - Internal Medicine Specialists
          </h2>

          <div className="flex gap-4 items-center">
            <SortFilter onSortChange={setSortOption} />
            <div className="md:hidden mb-4">
              <button
                onClick={toggleMobileFilter}
                className="w-20 border flex gap-2 px-2 items-center border-gray-300 py-1 rounded-md"
              >
                <GiSettingsKnobs />
                <span>Filters</span>
              </button>
            </div>
          </div>

          {loading ? (
            <p className="text-gray-500 mt-6">Loading doctors...</p>
          ) : doctors.length === 0 ? (
            <p className="text-gray-600 mt-6">No doctors match the selected filters.</p>
          ) : (
            doctors.map((doc, i) => <DoctorCard key={i} {...doc} />)
          )}
        </div>
      </div>
    </div>
  );
}
