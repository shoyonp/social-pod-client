import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Membership = () => {
  const memberships = [
    {
      title: "Basic Membership",
      price: "10",
      features: ["Access to basic content", "Post up to 5 posts"],
      buttonLabel: "Join Basic",
      buttonColor: "bg-blue-500",
      isDisabled: false,
    },
    {
      title: "Premium Membership",
      price: "25",
      features: [
        "Access to all content",
        "Priority support",
        "Post unlimited posts",
        "Exclusive webinars",
      ],
      buttonLabel: "Join Premium",
      buttonColor: "bg-gray-500",
      isDisabled: true,
      tag: "Coming Soon",
    },
    {
      title: "VIP Membership",
      price: "50",
      features: [
        "Unlimited access to all content",
        "24/7 support",
        "Post unlimited posts",
        "VIP-only events",
      ],
      buttonLabel: "Join VIP",
      buttonColor: "bg-gray-500",
      isDisabled: true,
      tag: "Coming Soon",
    },
  ];
  return (
    <>
      <Helmet>
        <title>Social Pod | Membership</title>
      </Helmet>
      <div className="w-full md:w-11/12 mx-auto my-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {memberships.map((membership, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-md shadow-md hover:shadow-xl transition h-full flex flex-col justify-between hover:scale-105"
          >
            {/* membership title and price */}
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-800">
                {membership.title}
              </h3>
              <p className="text-lg font-bold text-gray-700 mt-2">
                ${membership.price} USD
              </p>
            </div>

            {/*  features */}
            <ul className="mt-4 text-sm text-gray-600 flex-grow">
              {membership.features.map((feature, idx) => (
                <li key={idx} className="flex items-center space-x-2">
                  <span className="text-green-500">✔</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* availability  */}
            {membership.tag && (
              <div className="mt-4 text-center text-sm font-semibold text-red-500">
                {membership.tag}
              </div>
            )}

            {/*  btn */}
            <div className="mt-6">
              <Link to="/payment">
                <button
                  disabled={membership.isDisabled}
                  className={`w-full p-3 rounded-md text-white ${
                    membership.buttonColor
                  } hover:bg-opacity-90 transition ${
                    membership.isDisabled ? "cursor-not-allowed opacity-50" : ""
                  }`}
                >
                  {membership.isDisabled
                    ? "Unavailable"
                    : membership.buttonLabel}
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Membership;
