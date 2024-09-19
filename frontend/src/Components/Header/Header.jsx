"use client";
import Link from "next/link";

import { GoChevronDown } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import { setOpen, setLanguage } from "./HeaderSlice";
import Navbar from "./Navbar/Navbar";


const Header = () => {
    
    const isOpen = useSelector(state=> console.log(state) )
    const language = useSelector((state) => console.log(state));
    const dispatch = useDispatch()
    const handleToggle = () => {
      dispatch(setOpen());
    };
  
    const handleSelect = (language) => {
      dispatch(setLanguage(language));
    };

  return (
    <div>
       <header className="max-w-[1440] h-[48px] bg-[#000000] flex justify-end">
     <div className="w-[1000px] ">
     <div className="w-[900px] h-full">
         <div className="h-full flex justify-between items-center">
          
          <div className="w-[650px] flex items-center gap-3 text-white">
          <h5>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</h5>
          <Link href={"/"} className="underline underline-offset-1">ShopNow</Link>
          </div>

          <div className="flex items-center gap-3 text-white">
            <p>English</p>
            <div>
            <GoChevronDown className="w-6 h-6"/>
            </div>
          </div>
         
         </div>
        </div>
     </div>

      
    </header>

    <div className="mt-10 mb-4">
            <Navbar></Navbar>
          </div>
    </div>
   

    // <div>
    //   <div className="bg-black text-white min-h-14 flex justify-between items-center">
    //   <div className="w-[70%] flex justify-end">
    //     <h4 className="font-light">
    //       Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
    //       <span className="ml-2">
    //         <u>
    //           <Link href="#" className="font-bold">
    //             ShopNow
    //           </Link>
    //         </u>
    //       </span>
    //     </h4>
    //   </div>

    //   <div className="w-[30%] flex justify-center relative">
    //     <div className="flex items-center gap-4 ">
    //       <div>
    //         <p>{language}</p>
    //       </div>

    //       <div onClick={handleToggle} className="cursor-pointer">
    //         <GoChevronDown className="w-8 h-8" />
    //       </div>
    //     </div>

    //     {
    //       isOpen && (
    //         <ul className="absolute w-[29%] border rounded-full shadow-lg bg-white text-black mt-7 mr-7">
    //         <li onClick={()=> handleSelect("English")} className="w-full text-center p-2 cursor-pointer">English</li>
    //         <li onClick={()=> handleSelect("Bangla")} className="w-full text-center pb-2 cursor-pointer">Bangla</li>
    //         </ul>
    //       )
    //     }
    //   </div>
    // </div>

    //       <div className="mt-10 mb-4">
    //         <Navbar></Navbar>
    //       </div>
    // </div>
  );
};

export default Header;
