import bag from "../../../../../public/products/bag.png"
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineShoppingCart } from "react-icons/md";
import Foryou from "./Foryou/Foryou";
import SubsectionTitle from "@/Components/CommonComponents/SubsectionTitle/SubsectionTitle";
import Carts from "@/Components/CommonComponents/Carts/Carts";

const Wishlist = () => {
 

  const wishlists = [
    {
      img: bag,
      width: 178,
      height: 129,
      title: "Gucci duffle bag",
      price: "$960",
      discount: "$1160",
      off: "-35%",
      iconOne: <RiDeleteBin6Line className="w-6 h-6" />,
      iconThree: <MdOutlineShoppingCart className="w-6 h-6" />,
      btnTitle: "Add to Cart"
    },
    {
      img: bag,
      width: 178,
      height: 129,
      title: "Gucci duffle bag",
      price: "$960",
      iconOne: <RiDeleteBin6Line className="w-6 h-6" />,
      iconThree: <MdOutlineShoppingCart className="w-6 h-6" />,
      btnTitle: "Add to Cart"
    },
    {
      img: bag,
      width: 178,
      height: 129,
      title: "Gucci duffle bag",
      price: "$960",
      iconOne: <RiDeleteBin6Line className="w-6 h-6" />,
      iconThree: <MdOutlineShoppingCart className="w-6 h-6" />,
      btnTitle: "Add to Cart"
    },
    {
      img: bag,
      width: 178,
      height: 129,
      title: "Gucci duffle bag",
      price: "$960",
      iconOne: <RiDeleteBin6Line className="w-6 h-6" />,
      iconThree: <MdOutlineShoppingCart className="w-6 h-6" />,
      btnTitle: "Add to Cart"
    },

  ];
  return (
    <section className="max-w-[1170px] mx-auto">
      <SubsectionTitle
        sectionTitle="Wishlist (4)"
        sectionTitleColor="text-[#000000]"
        sectionTitleFontSize="text-xl"
        sectionTitleFontWeight="font-normal"
        buttonTitle="Move All To Bag"
        buttonTextColor="text-black"
        border="border border-[#00000080]"
        radius="rounded"
        fontWeight="font-medium"
        width="w-[223px]"
        height="h-[56px]"
        paddingX="px-12"
        paddingY="py-4"
        marginT={"mt-[80px]"}
      />

      <div className="mt-10 grid grid-cols-4">
        
        {
          wishlists.map((wishlist, index)=>(
            <div>
            <Carts 
              key={index}
              img={wishlist.img}
              width={wishlist.width}
              height={wishlist.height}
              title={wishlist.title}
              price={wishlist.price}
              discount={wishlist.discount}
              off={wishlist.off}
              iconOne={wishlist.iconOne}
              btnTitle={wishlist.btnTitle}
              iconThree={wishlist.iconThree}
            />
            </div>
          ))
        }
        
      </div>


        {/* for you section */}
        <Foryou/>
    
    </section>
  );
};

export default Wishlist;
