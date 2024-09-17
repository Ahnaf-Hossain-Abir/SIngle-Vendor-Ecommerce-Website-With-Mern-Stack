import ButtonComponent from '@/Components/CommonComponents/ButtonComponent/ButtonComponent';
import SectionTitle from '@/Components/CommonComponents/SectionTitle/SectionTitle';
import laptop from "../../../../../../public/products/laptop.png"
import { IoEyeOutline } from "react-icons/io5";
import Carts from '@/Components/CommonComponents/Carts/Carts';
import { MdOutlineShoppingCart } from "react-icons/md";
const Foryou = () => {
    const totalStars = 5;
    const filledStars = 5;
    const justFor = [
        {
          img: laptop,
          width: 158,
          height: 166,
          title: "ASUS FHD Gaming Laptop",
          price: "$960",
          discount: "$1160",
          off: "-35%",
          iconOne: <IoEyeOutline className="w-6 h-6" />,
          iconThree: <MdOutlineShoppingCart className="w-6 h-6" />,
          btnTitle: "Add to Cart",
          quantity: 65
        },
        {
          img: laptop,
          width: 158,
          height: 166,
          title: "ASUS FHD Gaming Laptop",
          price: "$960",
          iconOne: <IoEyeOutline className="w-6 h-6" />,
          iconThree: <MdOutlineShoppingCart className="w-6 h-6" />,
          btnTitle: "Add to Cart",
          quantity: 65
        },
        {
          img: laptop,
          width: 158,
          height: 166,
          title: "ASUS FHD Gaming Laptop",
          price: "$960",
          condition: "NEW",
          iconOne: <IoEyeOutline className="w-6 h-6" />,
          iconThree: <MdOutlineShoppingCart className="w-6 h-6" />,
          btnTitle: "Add to Cart",
          quantity: 65
        },
        {
            img: laptop,
            width: 158,
            height: 166,
            title: "ASUS FHD Gaming Laptop",
            price: "$960",
            iconOne: <IoEyeOutline className="w-6 h-6" />,
            iconThree: <MdOutlineShoppingCart className="w-6 h-6" />,
            btnTitle: "Add to Cart",
            quantity: 65
          },
    
      ]
    return (
        <section className='max-w-[1170px] mx-auto mt-12'>
           <div className='flex justify-between'>
            <SectionTitle text={"Just For You"} fontSize={"text-xl"} fontWeight={"font-normal"}/>

            <ButtonComponent name={"See All"} fontWeight={"font-medium"} width={"w-[150px]"} height={"h-[56px]"} radius={"rounded"} border={"border border-black"} paddingY={"py-4"}/>
           </div> 

           <div className="mt-10 grid grid-cols-4">
            {
                justFor.map((you, index)=>(
                    <div>
                     <Carts img={you.img} width={you.width} height={you.height} title={you.title} price={you.price} discount={you.discount} off={you.off} condition={you.condition} iconOne={you.iconOne} iconThree={you.iconThree} btnTitle={you.btnTitle} quantity={you.quantity} totalStars={totalStars} filledStars={filledStars}/>
                    </div>
                ))
            }
           </div>
        </section>
    );
};

export default Foryou;