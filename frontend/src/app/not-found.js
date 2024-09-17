import ButtonComponent from "@/Components/CommonComponents/ButtonComponent/ButtonComponent";
import Link from "next/link";

const product = () => {
  return (
    
      <div className="max-w-[829px] h-[400px] mx-auto flex items-center">
       <div className="">
       <h1 className="text-[110px] text-[#000000] font-medium">
          404 Not Found
        </h1>
        <p className="text-base font-normal text-[#000000] text-center">
          Your visited page not found. You may go home page.
        </p>
        <div className="Btn mt-12 flex justify-center">
          <Link href={"/"}>
            {" "}
            <ButtonComponent
              name={"Back to home page"}
              nameColor={"text-white"}
              fontWeight={"font-light"}
              width={"w-[254px]"}
              height={"h-[56px]"}
              display={"flex"}
              justify={"justify-center"}
              align={"items-center"}
              btnColor={"bg-[#DB4444]"}
              radius={"rounded"}
              border={"border"}
            />
          </Link>
        </div>
       </div>
      </div>
    
  );
};

export default product;
