import Image from "next/image";
import Clothes from "/public/products/camera.png";
import { FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import LeftRightArray from "../../CommonComponents/LeftRightArray/LeftRightArray";
import SectionTitle from "@/Components/CommonComponents/SectionTitle/SectionTitle";
import SubsectionTitle from "@/Components/CommonComponents/SubsectionTitle/SubsectionTitle";
import Carts from "@/Components/CommonComponents/Carts/Carts";
import ButtonComponent from "@/Components/CommonComponents/ButtonComponent/ButtonComponent";
const ExploreProducts = () => {
  const totalStars = 5;
  const filledStars = 4;

  const products = [
    {
      img: Clothes,
      width: 146,
      height: 163,
      title: "CANON EOS DSLR Camera",
      price: "$260",
      condition: "NEW",
      iconOne: <CiHeart className="w-6 h-6" />,
      iconTwo: <IoEyeOutline className="w-6 h-6" />,
      quantity: 35,
      btnTitle: "Add to Cart",
    },
    {
      img: Clothes,
      width: 146,
      height: 163,
      title: "CANON EOS DSLR Camera",
      price: "$260",
      condition: "NEW",
      iconOne: <CiHeart className="w-6 h-6" />,
      iconTwo: <IoEyeOutline className="w-6 h-6" />,
      quantity: 95,
      btnTitle: "Add to Cart",
    },
    {
      img: Clothes,
      width: 146,
      height: 163,
      title: "CANON EOS DSLR Camera",
      price: "$260",
      condition: "NEW",
      iconOne: <CiHeart className="w-6 h-6" />,
      iconTwo: <IoEyeOutline className="w-6 h-6" />,
      quantity: 325,
      btnTitle: "Add to Cart",
    },
    {
      img: Clothes,
      width: 146,
      height: 163,
      title: "CANON EOS DSLR Camera",
      price: "$260",
      condition: "NEW",
      iconOne: <CiHeart className="w-6 h-6" />,
      iconTwo: <IoEyeOutline className="w-6 h-6" />,
      quantity: 145,
      btnTitle: "Add to Cart",
    },
    {
      img: Clothes,
      width: 146,
      height: 163,
      title: "CANON EOS DSLR Camera",
      price: "$260",
      condition: "NEW",
      iconOne: <CiHeart className="w-6 h-6" />,
      iconTwo: <IoEyeOutline className="w-6 h-6" />,
      quantity: 325,
      btnTitle: "Add to Cart",
    },
    {
      img: Clothes,
      width: 146,
      height: 163,
      title: "CANON EOS DSLR Camera",
      price: "$260",
      condition: "NEW",
      iconOne: <CiHeart className="w-6 h-6" />,
      iconTwo: <IoEyeOutline className="w-6 h-6" />,
      quantity: 35,
      btnTitle: "Add to Cart",
    },
    {
      img: Clothes,
      width: 146,
      height: 163,
      title: "CANON EOS DSLR Camera",
      price: "$260",
      condition: "NEW",
      iconOne: <CiHeart className="w-6 h-6" />,
      iconTwo: <IoEyeOutline className="w-6 h-6" />,
      quantity: 145,
      btnTitle: "Add to Cart",
    },
    {
      img: Clothes,
      width: 146,
      height: 163,
      title: "CANON EOS DSLR Camera",
      price: "$260",
      condition: "NEW",
      iconOne: <CiHeart className="w-6 h-6" />,
      iconTwo: <IoEyeOutline className="w-6 h-6" />,
      quantity: 95,
      btnTitle: "Add to Cart",
    },
  ];
  return (
    <section className="max-w-[1170px] mx-auto mt-10">
      {/* Our Products heading */}

      <SectionTitle text="Our Products" textColor="text-[#DB4444]" />

      <div className="mt-5 flex justify-between items-center">
        <div className="browse-by-category text-3xl font-semibold">
          <h2>Explore Our Products</h2>
        </div>

        <LeftRightArray />
      </div>

      {/* products carts */}

      <div className="mt-10 grid grid-cols-4 gap-6">
        {products?.map((product) => (
          <div>
            <Carts
              img={product.img}
              width={product.width}
              height={product.height}
              title={product.title}
              price={product.price}
              condition={product.condition}
              iconOne={product.iconOne}
              iconTwo={product.iconTwo}
              quantity={product.quantity}
              btnTitle={product.btnTitle}
              totalStars={totalStars}
              filledStars={filledStars}
            />
          </div>
        ))}
      </div>

      <div className="Btn mt-10 flex justify-center">
        <ButtonComponent
          name={"View All Products"}
          nameColor={"text-white"}
          fontSize={""}
          fontWeight={"font-light"}
          width={"w-[234px]"}
          height={"h-[56px]"}
          display={"flex"}
          justify={"justify-center"}
          align={"items-center"}
          btnColor={"bg-[#DB4444]"}
          radius={"rounded"}
          border={"border"}
        />
      </div>
    </section>
  );
};

export default ExploreProducts;
