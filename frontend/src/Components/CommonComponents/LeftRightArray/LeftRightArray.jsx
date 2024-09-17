import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";

const LeftRightArray = () => {
    return (
        <div className="left-right-array flex gap-2">
        <div className="left-array border bg-gray-300 rounded-full w-8 h-8">
          <div className="w-full h-full flex justify-center items-center cursor-pointer">
            <HiArrowLeft className=" w-4 h-4 " />
          </div>
        </div>
        <div className="right-array border bg-gray-300 rounded-full w-8 h-8">
          <div className="w-full h-full flex justify-center items-center cursor-pointer">
            <HiArrowRight className=" w-4 h-4 " />
          </div>
        </div>
      </div>
    );
};

export default LeftRightArray;