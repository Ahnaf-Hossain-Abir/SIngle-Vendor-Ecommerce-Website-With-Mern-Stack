import Image from "next/image";
import { FaStar } from "react-icons/fa";
const Carts = ({
  img,
  width,
  height,
  title,
  price,
  off,
  condition,
  iconOne,
  iconTwo,
  iconThree,
  discount,
  quantity,
  btnTitle,
  totalStars,
  filledStars,
}) => {
  return (
    <>
      <div className="border border-gray-300 bg-[#F5F5F5] w-[270px] h-[250px] rounded relative ">
        {(off || condition) && (
          <div
            className={`absolute mt-5 ml-3 w-[55px] h-[26px] rounded px-3 py-1 text-xs ${
              condition ? "bg-[#00FF66]" : "bg-[#DB4444]"
            } text-white font-normal flex items-center`}
          >
            {off || condition}
          </div>
        )}
        <div className="absolute w-[250px] h-24 flex justify-end mb-5 cursor-pointer">
          <div className="bg-[#FFFFFF] rounded-full mt-5 w-9 h-9 flex justify-center items-center">
            {iconOne}
          </div>
        </div>
        {iconTwo && (
          <div className="absolute w-[250px] h-24 flex justify-end cursor-pointer">
            <div className="bg-[#FFFFFF] rounded-full mt-16 w-9 h-9 flex justify-center items-center">
              {iconTwo}
            </div>
          </div>
        )}

        <div className="w-full h-full flex justify-center items-center">
          <Image src={img} width={width} height={height}></Image>
        </div>

        {btnTitle && (
          <div className="absolute bottom-0 w-[270px] h-[41px] border bg-black text-white flex justify-center">
            <button className="flex justify-center items-center gap-2 font-normal">
              {iconThree && iconThree}
              <span>{btnTitle}</span>
            </button>
          </div>
        )}
      </div>
      <div className="mt-3 text-base font-medium">
        <h3>{title}</h3>
        <div className="flex gap-3">
          <p className="text-[#DB4444]">{price}</p>
          {discount && (
            <p className="text-gray-300">
              <del>{discount}</del>
            </p>
          )}
        </div>
        <div className="flex gap-3">
          {totalStars && (
            <div className="flex items-center">
              {Array(totalStars)
                .fill()
                .map((_, i) => (
                  <FaStar
                    key={i}
                    className={`w-4 h-4 ms-1 ${
                      i < filledStars
                        ? "text-yellow-300"
                        : "text-gray-300 dark:text-gray-500"
                    }`}
                  />
                ))}
            </div>
          )}
          {quantity && <p className="text-gray-300">({quantity})</p>}
        </div>
      </div>
    </>
  );
};

export default Carts;
