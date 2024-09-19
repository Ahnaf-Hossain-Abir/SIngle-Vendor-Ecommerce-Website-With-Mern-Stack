import Image from "next/image";
import cartGame from "../../../public/products/cartGame.png";
import gameplay from "../../../public/products/gameplay.png";
import sbox from "../../../public/products/sbox.png";
import key from "../../../public/products/key.png";
import ButtonComponent from "../CommonComponents/ButtonComponent/ButtonComponent";
import { CiHeart } from "react-icons/ci";
import { TbTruckDelivery } from "react-icons/tb";
import SectionTitle from "../CommonComponents/SectionTitle/SectionTitle";
import { IoEyeOutline } from "react-icons/io5";
import Carts from "../CommonComponents/Carts/Carts";
const CartDetails = () => {
    const totalStars = 5;
    const filledStars = 4;
  const cartGames = [
    {
      img: cartGame,
    },
    {
      img: cartGame,
    },
    {
      img: cartGame,
    },
    {
      img: cartGame,
    },
  ];

  const relatedItems = [
    {
      img: key,
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
      img: sbox,
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
      img: sbox,
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
      img: key,
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
    <section className="max-w-[1170px] mx-auto mt-16">
      
      <div className="flex justify-between mb-32">
        <div className="flex flex-col gap-6">
          {cartGames.map((cg, idx) => (
            <div
              key={idx}
              className="w-[170px] h-[138px] bg-[#F5F5F5] rounded "
            >
              <div className="w-full h-full flex justify-center items-center">
                <Image src={cg.img} width={121} height={114} />
              </div>
            </div>
          ))}
        </div>

        <div className="w-[500px] h-[600px] bg-[#F5F5F5] rounded">
          <div className="w-full h-full flex justify-center items-center">
            <Image src={gameplay} width={446} height={315} />
          </div>
        </div>

        <div className="w-[400px] flex flex-col gap-6">
          <div>
            <h3 className="text-[24px] font-semibold text-[#000000]">
              Havic HV G-92 Gamepad
            </h3>
            <p className="text-[24px] font-normal text-[#000000]">$192.00</p>
            <p className="text-[14px] font-normal text-[#000000]">
              PlayStation 5 Controller Skin High quality vinyl with air channel
              adhesive for easy bubble free install & mess free removal Pressure
              sensitive.
            </p>
          </div>

          <div className="w-[400px] border border-[#000000]"></div>

          <div className="flex gap-3">
            <p className="text-[#000000]">Class:</p>
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 border rounded-full bg-[#A0BCE0]"></div>
              <div className="w-5 h-5 border rounded-full bg-[#E07575]"></div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <p className="text-[#000000]">Size:</p>
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="w-8 h-8 border rounded hover:bg-[#DB4444] hover:text-white">
                <p className="w-full h-full flex justify-center items-center text-[12px]">
                  XS
                </p>
              </div>
              <div className="w-8 h-8 border rounded hover:bg-[#DB4444] hover:text-white">
                <p className="w-full h-full flex justify-center items-center text-[12px]">
                  XS
                </p>
              </div>
              <div className="w-8 h-8 border rounded hover:bg-[#DB4444] hover:text-white">
                <p className="w-full h-full flex justify-center items-center text-[12px]">
                  XS
                </p>
              </div>
              <div className="w-8 h-8 border rounded hover:bg-[#DB4444] hover:text-white">
                <p className="w-full h-full flex justify-center items-center text-[12px]">
                  XS
                </p>
              </div>
              <div className="w-8 h-8 border rounded hover:bg-[#DB4444] hover:text-white">
                <p className="w-full h-full flex justify-center items-center text-[12px]">
                  XS
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between cursor-pointer">
            <div class="flex items-center border border-gray-500 rounded overflow-hidden">
              <button class="bg-white hover:bg-gray-100 text-black font-bold py-2 px-4 focus:outline-none">
                -
              </button>

              <div class="w-12 text-center border-l border-r border-gray-300">
                2
              </div>

              <button class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 focus:outline-none">
                +
              </button>
            </div>

            <ButtonComponent
              name={"Buy Now"}
              nameColor={"text-white"}
              fontSize={"text-base"}
              fontWeight={"font-medium"}
              width={"w-[165px]"}
              height={"h-[44px]"}
              radius={"rounded"}
              paddingX={"px-12"}
              paddingY={"py-4"}
              btnColor={"bg-[#DB4444]"}
              display={"flex"}
              justify={"justify-center"}
              align={"items-center"}
            />

            <div className="w-10 h-10 bg-white border rounded">
              <div className="w-full h-full flex justify-center items-center">
                <CiHeart className="w-8 h-8" />
              </div>
            </div>
          </div>

          <div className="w-[399px] border border-gray-500 rounded  flex flex-col gap-3">
            
            <div className="flex items-center gap-3 p-4">
                
                <div>
                <TbTruckDelivery className="w-10 h-10" />
                </div>

                <div>
                <h6>Free Delivery</h6>
                <p className="text-[12px]">Enter your postal code for Delivery Availability</p>
                </div>
            </div>

            <div className="w-full border border-gray-500 "></div>

            <div className="flex items-center gap-3 p-4">
                
                <div>
                <TbTruckDelivery className="w-10 h-10" />
                </div>

                <div>
                <h6>Return Delivery</h6>
                <p className="text-[12px]">Free 30 Days Delivery Returns. Details</p>
                </div>
            </div>
          </div>
        </div>
      </div>
      
        <SectionTitle text={"Related Item"} textColor={"text-[#DB4444]"} fontSize={"text-base"} fontWeight={"font-semibold"}/>

        <div className="mt-10 grid grid-cols-4 gap-6 mb-16">
        {relatedItems?.map((relatedItem, index) => (
          <div key={index}>
           <Carts img={relatedItem.img} title={relatedItem.title} width={relatedItem.width} height={relatedItem.height} price={relatedItem.price} discount={relatedItem.discount} off={relatedItem.off} iconOne={relatedItem.iconOne} iconTwo={relatedItem.iconTwo} btnTitle={relatedItem.btnTitle} quantity={relatedItem.quantity} totalStars={totalStars} filledStars={filledStars} />
          </div>
        ))}
      </div>

    </section>
  );
};

export default CartDetails;
