import Image from "next/image";
import Clothes from "/public/products/clothes.png";
import { FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import SectionTitle from "@/Components/CommonComponents/SectionTitle/SectionTitle";
import SubsectionTitle from "@/Components/CommonComponents/SubsectionTitle/SubsectionTitle";
import Carts from "@/Components/CommonComponents/Carts/Carts";


const BestSelling = () => {
  const totalStars = 5;
  const filledStars = 4;

  const products = [
    {
      img: Clothes,
      width: 140,
      height: 146,
      title: "The north coat",
      price: "$260",
      iconOne : <CiHeart className="w-6 h-6" />,
      iconTwo : <IoEyeOutline className="w-6 h-6" />

    },
    {
      img: Clothes,
      width: 140,
      height: 146,
      title: "The north coat",
      price: "$260",
       iconOne : <CiHeart className="w-6 h-6" />,
       iconTwo : <IoEyeOutline className="w-6 h-6" />

    },
    {
      img: Clothes,
      width: 140,
      height: 146,
      title: "The north coat",
      price: "$260",
       iconOne : <CiHeart className="w-6 h-6" />,
       iconTwo : <IoEyeOutline className="w-6 h-6" />

    },
    {
      img: Clothes,
      width: 140,
      height: 146,
      title: "The north coat",
      price: "$260",
       iconOne : <CiHeart className="w-6 h-6" />,
       iconTwo : <IoEyeOutline className="w-6 h-6" />

    },
  ]
  return (
    <section className="max-w-[1170px] mx-auto mt-10 ">
      {/* category heading */}

      <SectionTitle text="This Month" textColor="text-[#DB4444]"/>
      
      <SubsectionTitle marginT={"mt-5"} sectionTitle={"Best Selling Products"} sectionTitleFontSize={"text-3xl"} sectionTitleFontWeight={"font-semibold"} width={"w-[159px]"} height={"h-[56px] "}  buttonTitle={"View All"} buttonColor={"bg-[#DB4444]"} border={"border"} buttonTextColor={"text-white"} radius={"rounded"} fontWeight={"font-light"} paddingX={"px-12"} paddingY={"py-1"} />

      {/* products carts */}

      <div className="mt-10 grid grid-cols-4 justify-between">
        {
          products?.map(product=>
          <div>
          <Carts img={product.img} width={product.width} height={product.height} title={product.title} price={product.price} iconOne={product.iconOne}
          iconTwo={product.iconTwo} totalStars={totalStars} filledStars={filledStars}
          />
          </div>
          )
        }

      </div>
    </section>
  );
};

export default BestSelling;
