import Image from "next/image";
import { HiMiniDevicePhoneMobile } from "react-icons/hi2";
import { LuGamepad } from "react-icons/lu";
import { PiHeadphonesThin } from "react-icons/pi";
import { CiCamera } from "react-icons/ci";
import { BsSmartwatch } from "react-icons/bs";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import LeftRightArray from "../../CommonComponents/LeftRightArray/LeftRightArray";
import SectionTitle from "@/Components/CommonComponents/SectionTitle/SectionTitle";



const Categories = () => {
  const categories = [
    {
      logo: <HiMiniDevicePhoneMobile className="w-10 h-10"/>,
      title: "Phone"
    },
    {
      logo: <HiOutlineComputerDesktop className="w-10 h-10"/>,
      title: "Computers"
    },
    {
      logo: <BsSmartwatch className="w-10 h-10"/>,
      title: "SmartWatch"
    },
    {
      logo: <CiCamera className="w-10 h-10"/>,
      title: "Camera"
    },
    {
      logo: <PiHeadphonesThin className="w-10 h-10"/>,
      title: "HeadPhones"
    },
    {
      logo: <LuGamepad className="w-10 h-10"/>,
      title: "Gaming"
    },
  ]
  return (
    <section className="max-w-[1170px] mx-auto mt-10">
      {/* category heading */}

      <SectionTitle text="Categories" textColor={"text-[#DB4444]"}/>

      <div className="mt-5 flex justify-between items-center">
        <div className="browse-by-category text-3xl font-semibold">
          <h2>Browse By Category</h2>
        </div>

        <LeftRightArray/>
      </div>

      {/* category cards */}
      <div className="mt-10 flex items-center gap-4">
      {
        categories?.map(category=> 
          <div className="border border-gray-300 rounded w-[16%] h-36 hover:bg-[#DB4444] hover:text-white cursor-pointer">
          <div className="flex justify-center items-end w-full h-[50%]">
            {category.logo}
          </div>
          <div className="flex justify-center items-center w-full h-[50%]">
            <p>{category.title}</p>
          </div>
        </div>
        )
      }
      </div>
    </section>
  );
};

export default Categories;
