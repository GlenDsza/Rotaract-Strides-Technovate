import { Link, Navigate } from "react-router-dom";

function EventsCard({ event }: { event: any }) {
  const { title, date, description, city, club, coverImage } = event;
  const defaultImage =
    "https://images.unsplash.com/photo-1674574124345-02c525664b65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80";


    const handleRegisterClick = () => {
      // Store the event details in local storage or a state management system
      // For example, you can use localStorage:
      localStorage.setItem("selectedEvent", JSON.stringify(event));
  
      // Navigate to the checkout page
     
    };
    const handleSee = () => {
      // Store the event details in local storage or a state management system
      // For example, you can use localStorage:
      localStorage.setItem("selectedEvent", JSON.stringify(event));
  
      // Navigate to the checkout page
     
    };
    

  return (
    <div className=" w-400 mt-8 ml-8">
      {/* Repeat the following card block to create multiple cards */}
      
     
      <div className="w- ml-12 px-2 mb-8">
        <div className="bg-white rounded-xl overflow-hidden shadow-lg">
        <img
          className="h-48 w-full object-cover"
          src={coverImage.length > 0 ? coverImage[0] : defaultImage}
          alt="Event"
        />
        <div className="px-6 py-4">
          <div className="mb-2 text-xl font-semibold text-teal-500">
            {title}
          </div>
          <p className="mt-2 text-base font-semibold text-gray-700">
            Location: {city}, India
          </p>
          <p className="mt-2 text-gray-700">{description}</p>
          <p className="mt-2 text-base font-semibold text-gray-700">
            {date.substring(0, 10)}{" "}
            <span className="text-sm font-light"> ({club}) </span>
          </p>
        </div>
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
            {/* {isCheckoutPage ? null : ( */}
            <Link to="/home/eventdetails">
              <button className="rounded-full bg-teal-500 px-4 py-2 font-bold text-white hover:bg-teal-600" onClick={handleSee}>
                See More
              </button>
              </Link>
            {/* )} */}
            </div>
            {/* {isCheckoutPage ? null : ( */}
            <Link to="/home/user/checkout">
              <button className="rounded-full bg-teal-500 px-4 py-2 font-bold text-white hover:bg-teal-600" onClick={handleRegisterClick}>
                Register
              </button>
            </Link>
            {/* )} */}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default EventsCard;