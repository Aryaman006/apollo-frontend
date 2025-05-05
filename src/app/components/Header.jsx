import { FaMapMarkerAlt, FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoLocationOutline } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";

const navLinks = [
  "Buy Medicines",
  "Find Doctors",
  "Lab Tests",
  "Circle Membership",
  "Health Records",
  "Diabetes Reversal",
  { label: "Buy Insurance", badge: "New" },
];

const SearchBar = () => (
  <div className="relative w-full">
    <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
    <input
      type="text"
      placeholder="Search Doctors, Specialities, Conditions etc."
      className="w-full pl-10 pr-4 py-2 border rounded-full bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      aria-label="Search"
    />
  </div>
);

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Mobile & Mini Tablet Layout */}
      <div className="block md:hidden max-w-7xl mx-auto px-4 py-3 space-y-3">
        {/* Top Row */}
        <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="hidden min-[400px]:flex items-center gap-1">
            <span className="text-xl font-semibold text-[#007C91]">Apollo</span>
            <span className="bg-orange-500 text-white px-1.5 py-0.5 rounded text-sm font-bold">24|7</span>
            </div>
            <button
            aria-label="Select Address"
            className="flex items-center gap-1 hover:text-[#007C91] focus:outline-none focus:ring-2 focus:ring-[#007C91] rounded transition"
          >
            <IoLocationOutline className="text-xl font-semibold" />
            <div className="flex flex-col text-sm">
            <span className="">Select Location</span>
            <div className="flex">
            <span className="font-medium">Select Address </span>
            <span className="font-medium"><MdKeyboardArrowDown/> </span>
            
            </div>
            </div>
            {/* <FaMapMarkerAlt /> */}
            {/* <span className="text-xs ml-1">⌄</span> */}
          </button>
            
          </div>
          <div className="flex items-center gap-2">
            <button
              aria-label="Login"
              className="flex items-center gap-2 text-[#007C91] px-4 py-1.5 rounded-full text-2xl hover:bg-[#f0fdfd] transition focus:outline-none focus:ring-2 focus:ring-[#007C91]"
            >
              <CgProfile />
            </button>
          </div>
        </div>

        {/* Search */}
        <SearchBar />
      </div>

      {/* Tablet/Desktop Layout */}
      <div className="hidden md:flex items-center justify-between max-w-7xl mx-auto px-6 py-3">
        {/* Left: Logo + Location */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <span className="text-xl font-semibold text-[#007C91]">Apollo</span>
            <span className="bg-orange-500 text-white px-1.5 py-0.5 rounded text-sm font-bold">24|7</span>
          </div>
          <button
            aria-label="Select Address"
            className="flex items-center gap-1 hover:text-[#007C91] focus:outline-none focus:ring-2 focus:ring-[#007C91] rounded transition"
          >
            <IoLocationOutline className="text-xl font-semibold" />
            <div className="flex flex-col text-sm">
            <span className="">Select Location</span>
            <div className="flex">
            <span className="font-medium">Select Address </span>
            <span className="font-medium"><MdKeyboardArrowDown/> </span>
            
            </div>
            </div>
            {/* <FaMapMarkerAlt /> */}
            {/* <span className="text-xs ml-1">⌄</span> */}
          </button>
        </div>

        {/* Center: Search Bar */}
        <div className="flex-1 mx-6">
          <SearchBar />
        </div>

        {/* Right: Login Button */}
        <button
          aria-label="Login"
          className="flex items-center gap-2 text-[#007C91] px-4 py-1.5 rounded-full text-2xl hover:bg-[#f0fdfd] transition focus:outline-none focus:ring-2 focus:ring-[#007C91]"
        >
          <CgProfile />
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="hidden md:flex overflow-x-auto justify-center gap-6 text-sm font-semibold text-gray-800 py-3 px-4 whitespace-nowrap border-t border-gray-300">
        {navLinks.map((link, idx) =>
          typeof link === "string" ? (
            <a key={idx} href="#" className="hover:text-[#007C91] transition">
              {link}
            </a>
          ) : (
            <div key={idx} className="flex items-center gap-1 hover:text-[#007C91] transition">
              <a href="#">{link.label}</a>
              <span className="text-[10px] bg-[#e7f9f9] text-[#007C91] px-1.5 py-0.5 rounded">
                {link.badge}
              </span>
            </div>
          )
        )}
      </nav>
    </header>
  );
};

export default Header;
