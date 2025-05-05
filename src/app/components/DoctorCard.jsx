import { FaThumbsUp } from "react-icons/fa";

const DoctorCard = ({
  name,
  image,
  specialization,
  experience,
  qualifications,
  location,
  fees,
  cashback,
  consultTime,
  rating,
  totalRatings,
}) => {
  return (
    <div className="border border-gray-200 rounded-lg p-4 mb-4 shadow-sm bg-white max-w-full">
      <div className="flex flex-col sm:flex-row sm:gap-4 gap-3 items-center sm:items-start">
        <img
          src={image || "/default-doctor.jpg"}
          alt={name}
          className="w-20 h-20 rounded-full object-cover"
        />

        <div className="flex-1 flex flex-col gap-1 text-center sm:text-left">
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-sm text-gray-600 truncate">{specialization}</p>
          <p className="text-sm font-semibold text-indigo-700">
            {experience} YEARS · {qualifications}
          </p>
          <p className="text-sm text-gray-500">{location}</p>
          <p className="text-sm text-gray-500">
            Apollo 24|7 Virtual Clinic – {location}
          </p>

          {rating && (
            <p className="text-green-600 flex justify-center sm:justify-start items-center gap-2 text-sm mt-1">
              <FaThumbsUp />
              <span>
                {rating}% ({totalRatings}+ Patients)
              </span>
            </p>
          )}
        </div>

        <div className="sm:text-right text-center mt-4 sm:mt-0">
          <p className="text-lg font-semibold">₹{fees}</p>
          {cashback && (
            <p className="text-xs text-yellow-500">₹{cashback} Cashback</p>
          )}
          <button className="mt-2 px-4 py-1 text-sm font-medium border border-blue-500 text-blue-600 rounded hover:bg-blue-50">
            Consult Online
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
