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
      <div className="bg-black text-white min-h-14 flex justify-between items-center">
      <div className="w-[70%] flex justify-end">
        <h4 className="font-light">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
          <span className="ml-2">
            <u>
              <Link href="#" className="font-bold">
                ShopNow
              </Link>
            </u>
          </span>
        </h4>
      </div>

      <div className="w-[30%] flex justify-center relative">
        <div className="flex items-center gap-4 ">
          <div>
            <p>{language}</p>
          </div>

          <div onClick={handleToggle} className="cursor-pointer">
            <GoChevronDown className="w-8 h-8" />
          </div>
        </div>

        {
          isOpen && (
            <ul className="absolute w-[29%] border rounded-full shadow-lg bg-white text-black mt-7 mr-7">
            <li onClick={()=> handleSelect("English")} className="w-full text-center p-2 cursor-pointer">English</li>
            <li onClick={()=> handleSelect("Bangla")} className="w-full text-center pb-2 cursor-pointer">Bangla</li>
            </ul>
          )
        }
      </div>
    </div>

          <div className="mt-10 mb-4">
            <Navbar></Navbar>
          </div>
    </div>
  );
};

export default Header;
