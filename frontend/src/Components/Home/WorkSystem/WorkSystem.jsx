import { MdOutlineVerifiedUser } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { PiHeadphonesThin } from "react-icons/pi";
const WorkSystem = () => {
  const systems = [
    {
      icon: <TbTruckDelivery className="w-10 h-10" />,
      title: "FREE AND FAST DELIVERY",
      details: "Free delivery for all orders over $140",
    },
    {
      icon: <PiHeadphonesThin className="w-10 h-10" />,
      title: "24/7 CUSTOMER SERVICE",
      details: "Friendly 24/7 customer support",
    },
    {
      icon: <MdOutlineVerifiedUser className="w-10 h-10" />,
      title: "MONEY BACK GUARANTEE",
      details: "We return money within 30 days",
    },
  ];
  return (
    <section className="mt-10 mb-10 max-w-[943px] mx-auto max-h-[161px">
      <div className="w-full h-full grid grid-cols-3 justify-between items-center">
        {systems?.map((system) => (
          <div className="w-full h-full">
            <div className="w-full flex justify-center">
              <div className="bg-gray-300 w-20 h-20 rounded-full">
                <div className="w-full h-full flex justify-center items-center relative">
                  <svg
                    width="58"
                    height="58"
                    viewBox="0 0 58 58"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute"
                  >
                    <circle cx="29" cy="29" r="29" fill="black" />
                  </svg>

                  <div className="absolute text-white">{system.icon}</div>
                </div>
              </div>
            </div>
            <div className="mt-6 text-center leading-loose">
                <h4 className="font-semibold">{system.title}</h4>
                <p>{system.details}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkSystem;
