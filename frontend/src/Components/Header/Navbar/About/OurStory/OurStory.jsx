import React from 'react';
import girls from "../../../../../../public/products/girls.jpeg"
import Image from 'next/image';
const OurStory = () => {
    return (
        <section className='max-w-[1300px] ml-auto mt-16'>
            <div className="flex flex-row-reverse justify-end items-center">
      <div className="w-[837px] h-[609px] rounded flex items-center">
        <Image src={girls} />
      </div>

      <div className="w-[525px] ">
        <h2 className="text-[54px] font-semibold text-[#000000] px-7">Our Story</h2>
        <p className="text-base font-normal text-[#000000] mt-8 px-7">Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>

        <p className='px-8 py-6'>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
      </div>
    </div>
        </section>
    );
};

export default OurStory;