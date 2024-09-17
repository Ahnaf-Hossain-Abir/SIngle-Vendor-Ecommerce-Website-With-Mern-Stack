import Image from "next/image";
import game from "/public/products/game.png";
import { FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import LeftRightArray from "../../CommonComponents/LeftRightArray/LeftRightArray";
import SectionTitle from "@/Components/CommonComponents/SectionTitle/SectionTitle";
import ButtonComponent from "@/Components/CommonComponents/ButtonComponent/ButtonComponent";
import Carts from "@/Components/CommonComponents/Carts/Carts";

const FlashSales = () => {
  const totalStars = 5;
  const filledStars = 4;
  const products = [
    {
      img: game,
      title: "HAVIT HV-G92 Gamepad",
      width: 146,
      height: 163,
      price: "$120",
      discount: "$160",
      off: "-40%",
      iconOne: <CiHeart className="w-6 h-6" />,
      iconTwo: <IoEyeOutline className="w-6 h-6" />,
      quantity: 88,
      btnTitle: "Add to Cart",
    },
    {
      img: game,
      title: "HAVIT HV-G92 Gamepad",
      width: 146,
      height: 163,
      price: "$120",
      discount: "$160",
      off: "-40%",
      iconOne: <CiHeart className="w-6 h-6" />,
      iconTwo: <IoEyeOutline className="w-6 h-6" />,
      quantity: 88,
      btnTitle: "Add to Cart",
    },
    {
      img: game,
      title: "HAVIT HV-G92 Gamepad",
      width: 146,
      height: 163,
      price: "$120",
      discount: "$160",
      off: "-40%",
      iconOne: <CiHeart className="w-6 h-6" />,
      iconTwo: <IoEyeOutline className="w-6 h-6" />,
      quantity: 88,
      btnTitle: "Add to Cart",
    },
    {
      img: game,
      title: "HAVIT HV-G92 Gamepad",
      width: 146,
      height: 163,
      price: "$120",
      discount: "$160",
      off: "-40%",
      iconOne: <CiHeart className="w-6 h-6" />,
      iconTwo: <IoEyeOutline className="w-6 h-6" />,
      quantity: 88,
      btnTitle: "Add to Cart",
    },
  ];
  return (
    <section className="max-w-[1170px] mx-auto mt-10 ">
      {/* category heading */}

      <SectionTitle text="Today’s" textColor={"text-[#DB4444]"}/>

      <div className="mt-5 flex justify-between items-center">
        <div className="w-[500px] flex justify-between items-center">
          <h2 className="text-3xl font-semibold">Flash Sales</h2>
           
          <div className="flex items-start justify-center gap-4 count-down-main">
      <div className="timer w-8">
      <p className="text-xs font-medium text-[#000000] mt-1 text-center w-full"> Days</p>
      <div>
      <h3 className="countdown-element days font-manrope font-bold text-2xl text-[#000000] text-center">
      03
      </h3>
      </div>
      </div>
      <h3 className="h-[52px] flex items-end font-manrope font-semibold text-2xl text-[#E07575]"> :</h3>
      <div className="timer w-8">
      <div>
      <p className="text-xs font-medium text-[#000000] mt-1 text-center w-full"> Hours</p>
      <h3 className="countdown-element hours font-manrope font-bold text-2xl text-[#000000] text-center">
        23
      </h3>
      </div>
      </div>
      <h3 className=" h-[52px] flex items-end font-manrope font-semibold text-2xl text-[#E07575]"> :</h3>
      <div className="timer w-12">
      <div>
      <p className="text-xs font-medium text-[#000000] mt-1 text-center w-full"> Minutes</p>
      <h3 className="countdown-element minutes font-manrope font-bold text-2xl text-[#000000] text-center">
        19
      </h3>
      </div>
      </div>
      <h3 className=" h-[52px] flex items-end font-manrope font-semibold text-2xl text-[#E07575]">:</h3>
      <div className="timer w-8">
      <div>
      <p className="text-xs font-medium text-[#000000] mt-1 text-center w-full">Seconds</p>
      <h3 className="countdown-element seconds font-manrope font-bold text-2xl text-[#000000] text-center">
       56
      </h3>
      </div>
      </div>
      </div>
          
        </div>

        <LeftRightArray />
      </div>

      {/* products carts */}

      <div className="mt-10 grid grid-cols-4">
        {products?.map((product) => (
          <div>
           <Carts img={product.img} title={product.title} width={product.width} height={product.height} price={product.price} discount={product.discount} off={product.off} iconOne={product.iconOne} iconTwo={product.iconTwo} btnTitle={product.btnTitle} quantity={product.quantity} totalStars={totalStars} filledStars={filledStars} />
          </div>
        ))}
      </div>
      
      
      <div className="Btn mt-12 flex justify-center">
      <ButtonComponent name={"View All Products"} nameColor={"text-white"} fontSize={""} fontWeight={"font-light"} width={"w-[234px]"} height={"h-[56px]"} display={"flex"} justify={"justify-center"} align={"items-center"} btnColor={"bg-[#DB4444]"} radius={"rounded"} border={"border"} />
      </div>
    </section>
  );
};

export default FlashSales;
