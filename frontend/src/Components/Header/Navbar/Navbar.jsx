"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { CiSearch } from "react-icons/ci";
import { IoIosHeartEmpty } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  const paramName = useParams();
  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Contact",
      path: "/navbar/contact",
    },
    {
      title: "About",
      path: "/navbar/about",
    },
    {
      title: "Sign Up",
      path: "/navbar/signup",
    },
  ];
  return (
    <div>
      <div className="w-[85%] mx-auto ">
        <nav className="flex justify-between items-center">
          {/* logo */}
          <div className="w-[20%]">
            <Link href={"/"}>
              <h6 className="font-bold text-2xl">Exclusive</h6>
            </Link>
          </div>

          {/* menubar */}
          <div className="w-[50%]">
            <ul className="flex justify-center items-center gap-10">
              {links?.map((link) => (
                <li
                  key={link.path}
                  className={`${paramName === link.path ? "text-red-400" : ""}`}
                >
                  <Link href={link.path}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-[30%] flex items-center justify-between ">
            {/* search box */}
            <div className="relative">
              <input
                className=" border rounded bg-gray-200 placeholder:text-xs placeholder:text-black px-4 py-2"
                type="search"
                name="search"
                id=""
                placeholder="What are you looking for?"
              />
              <span className="absolute top-2.5 right-2 cursor-pointer">
                <CiSearch className="font-bold w-6 h-6" />
              </span>
            </div>

            {/* favourite */}
            <div>
              <Link href={"/navbar/wishlist"}><IoIosHeartEmpty className="w-8 h-8 cursor-pointer" /></Link>
            </div>

            {/* shopping cart */}
            <div>
            <Link href={"/navbar/shoppingcart"}><MdOutlineShoppingCart className="w-8 h-8 cursor-pointer" /></Link>
            </div>
            
            {/* profile icon */}
            <div>
            <Link href={"/navbar/user"}><CgProfile className="w-8 h-8 cursor-pointer" /></Link>
            </div>
          </div>
        </nav>
      </div>

      
    </div>
  );
};

export default Navbar;
