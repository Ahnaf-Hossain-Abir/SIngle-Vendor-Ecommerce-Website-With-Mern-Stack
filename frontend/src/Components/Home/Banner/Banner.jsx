import Image from "next/image";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa6";
import { TfiApple } from "react-icons/tfi";
import { GoArrowRight } from "react-icons/go";
import iphone from "../../../../public/products/iphone.jpeg"

const Banner = () => {
  const lists = [
    {
      title: "Woman’s Fashion",
      icon: <FaAngleRight className="w-6 h-6"/>
    },
    {
      title: "Men’s Fashion",
      icon: <FaAngleRight className="w-6 h-6"/>
    },
    {
      title: "Electronics",
    },
    {
      title: "Home & Lifestyle",
    },
    {
      title: "Medicine",
    },
    {
      title: "Sports & Outdoor",
    },
    {
      title: "Baby’s & Toys",
    },
    {
      title: "Groceries & Pets",
    },
    {
      title: "Health & Beauty",
    },
  ];
  return (
    <section className="max-w-[1170px] mx-auto">
      
      <div className="flex justify-between items-center">
       
        <div className="mt-6 w-[217px] h-[344px]">
          <ul className="flex flex-col gap-4">
            {lists.map((list) => (
              <li className="cursor-pointer flex justify-between items-center"> <span>{list.title}</span>
              <span>{list.icon}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className=" h-[384px] border-r-2 border-gray-200"></div>

        <div className="mt-6 w-[892px] h-[344px] bg-[#000000] px-12 py-6">
         <div className="flex justify-between items-center">
          
          <div className="w-[300px]">
            
            <div className="flex items-center gap-4 ">
             <div><TfiApple className="w-[40px] h-[49px] text-white" /></div>
             <h5 className="font-normal text-white">iPhone 14 Series</h5>
            </div>

            <h1 className="text-white text-5xl font-semibold leading-snug tracking-wide mt-2">Up to 10% off Voucher</h1>

            <Link href={"/"} className="mt-2 inline-flex items-center gap-4 text-white text-base font-medium underline underline-offset-8 ">Shop Now <span><GoArrowRight className="w-8 h-8" /></span></Link>
          </div>

          <div className="w-[496px] flex justify-center items-center">
            <Image src={iphone} width={400}/>
          </div>
         </div>
        </div>
      
      </div>

      {/* <div className=" flex items-center">
            
            
            <div className="w-[217px] flex justify-between items-center">
            <ul className="mt-10">
                {
                    lists?.map(list=> <li className="cursor-pointer py-2">{list.title}</li>)
                }
            </ul>
            
            <div className="h-[400px] border border-gray-200"></div>
            </div>
        </div> */}
    </section>
  );
};

export default Banner;
