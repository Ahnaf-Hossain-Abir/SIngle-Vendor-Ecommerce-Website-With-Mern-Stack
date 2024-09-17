import React from 'react';

const Icon = ({icon}) => {
    return (
        <div className="bg-gray-300 w-20 h-20 rounded-full flex justify-center items-center">
        <div className="w-full h-full flex justify-center items-center relative">
          <svg
            width="58"
            height="58"
            viewBox="0 0 58 58"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute"
          >
            <circle cx="29" cy="29" r="29" fill="black" />
          </svg>

          <div className="absolute text-white">
            {icon}
          </div>
        </div>
      </div>
    );
};

export default Icon;