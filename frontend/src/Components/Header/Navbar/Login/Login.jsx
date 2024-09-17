import Image from "next/image";
import auth from "../../../../../public/products/auth.jpeg"
import ButtonComponent from "@/Components/CommonComponents/ButtonComponent/ButtonComponent";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

const Login = () => {
    return (
        <section className="max-w-[1305px] mt-12">
         <div className="flex justify-between items-center">
      <div className="w-[805px] h-[781px] rounded flex items-center">
        <Image src={auth}/>
      </div>

      <div className="w-[371px] ">
        <h2 className="text-4xl font-medium text-[#000000]">Log in to Exclusive</h2>
        <p className="text-base font-normal text-[#000000] mt-3">Enter your details below</p>
        <div className="mt-10">
          <input
            type="email"
            placeholder="Email or Phone Number"
            className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 mb-8"
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 mb-8"
          />

          <div className="flex justify-between items-center">
          
          <ButtonComponent name={"Log In"} nameColor={"text-white"} fontSize={"text-[14px]"} fontWeight={"font-medium"} width={"w-[143px]"} height={"h-[56px]"} radius={"rounded"} paddingX={"px-12"} paddingY={"py-4"} btnColor={"bg-[#DB4444]"} border={"border"}/>

          <p className="text-base font-normal text-[#DB4444]"><Link href={"/"}>Forget Password?</Link></p>
          </div>

          

          
        </div>
      </div>
    </div>
        </section>
    );
};

export default Login;