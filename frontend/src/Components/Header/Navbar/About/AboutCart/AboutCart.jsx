import HoverCart from "@/Components/CommonComponents/HoverCart/HoverCart";
import { CiShop } from "react-icons/ci";

const AboutCart = () => {
  const about = [
    {
      logoTwo : <CiShop className="w-10 h-10"/>,
      title : "10.5k ",
      details: "Sellers actives our site"
    },
    {
      logoTwo : <CiShop className="w-10 h-10"/>,
      title : "10.5k ",
      details: "Sellers actives our site"
    },
    {
      logoTwo : <CiShop className="w-10 h-10"/>,
      title : "10.5k ",
      details: "Sellers actives our site"
    },
    {
      logoTwo : <CiShop className="w-10 h-10"/>,
      title : "10.5k ",
      details: "Sellers actives our site"
    },
  ]
  return (
    <section className="max-w-[1170px] mx-auto">
     <HoverCart mapping={about} width={"w-[270px]"} height={"h-[230px]"} radius={"rounded"} border={"border"} borderColor={"border-gray-300"} textColor={"text-[#000000]"} detailsColor={"text-[#000000]"} titleFontSize={"text-[32px]"} detailsFontSize={"text-base"} titleFontWeight={"font-bold"} detailsFontWeight={"font-normal"} hoverColor= {"bg-[#DB4444]"} textHoverColor={"text-white"} />
    </section>
  );
};

export default AboutCart;
