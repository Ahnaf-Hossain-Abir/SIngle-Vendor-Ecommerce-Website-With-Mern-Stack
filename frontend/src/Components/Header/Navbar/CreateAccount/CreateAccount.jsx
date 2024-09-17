import Link from "next/link";
import { GoPeople } from "react-icons/go";

const CreateAccount = () => {
  return (
    <div className="border border-black w-full max-w-lg mx-auto p-4">
    {/* logo */}
    <div className="w-full flex justify-center">
      <GoPeople className="w-20 h-20" />
    </div>
  
    {/* heading */}
    <div className="text-center mb-4">
      <h3 className="text-xl">Create Account</h3>
      <p className="text-[#00FCEB]">With E-mail, Google, Facebook or Apple</p>
    </div>
  
    {/* form */}
    <div className="w-full">
      <form className="w-full">
        <div className="w-full flex flex-col items-center">
          {/* email */}
          <input
            className="w-[75%]  border-2 border-black rounded-md py-1 mb-6 placeholder:text-[#FFBCBC]"
            type="email"
            name="email"
            id=""
            placeholder="Type Your Email or Phone"
          />
  
          {/* password */}
          <input
            className="w-[75%] border-2 border-black rounded-md py-1 placeholder:text-[#FFBCBC]"
            type="password"
            name="password"
            id=""
            placeholder="Type Your Password"
          />
  
          {/* forgot password */}
          <Link href="/" className="text-blue-500 mb-4 w-[70%] text-end">
            Forgot Password
          </Link>
  
          {/* login button */}
          <input
            className="px-8 border border-white bg-gradient-to-r from-cyan-400 to-blue-600 text-white py-2 rounded-full font-medium"
            type="submit"
            value="Login"
          />
        </div>
      </form>
    </div>
  </div>
  
  );
};

export default CreateAccount;
