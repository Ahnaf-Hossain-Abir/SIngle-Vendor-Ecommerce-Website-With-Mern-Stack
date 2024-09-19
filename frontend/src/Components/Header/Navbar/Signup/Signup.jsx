import Image from "next/image";
import auth from "../../../../../public/products/auth.jpeg"
import ButtonComponent from "@/Components/CommonComponents/ButtonComponent/ButtonComponent";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { doSocialLogin } from "@/app/actions";
import SignInButtons from "@/Components/SignInButtons/SignInButtons";


const Signup = () => {

    return (
        <section className="max-w-[1305px] mt-12">
         <div className="flex justify-between items-center">
      <div className="w-[805px] h-[781px] rounded flex items-center">
        <Image src={auth}/>
      </div>

      <div className="w-[371px] ">
        <h2 className="text-4xl font-medium text-[#000000]">Create an account</h2>
        <p className="text-base font-normal text-[#000000] mt-3">Enter your details below</p>
        <div className="mt-10">
          <input
            type="text"
            placeholder="Name"
            className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 mb-8"
          />
          <br />
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

          <ButtonComponent name={"Create Account"} nameColor={"text-white"} fontSize={"text-base"} fontWeight={"font-medium"} width={"w-[371px]"} height={"h-[56px]"} radius={"rounded"} paddingX={"px-[122px]"} paddingY={"py-4"} btnColor={"bg-[#DB4444]"} border={"border"}/>

            <SignInButtons />

          <p className="text-center">Already have account? <u className="ml-3"><Link href={"/navbar/signup/login"}>Log in</Link></u></p>
        </div>
      </div>
    </div>
        </section>
    );
};

export default Signup;