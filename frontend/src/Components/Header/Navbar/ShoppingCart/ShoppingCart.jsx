import React from 'react';

const ShoppingCart = () => {
    return (
        <section className='max-w-[1170px] mx-auto mt-16'>
         <div className='flex justify-between items-center'>
            <div className='billing-details w-[470px]'>
            <h2 className='text-3xl font-medium text-[#000000]'>Billing Details</h2>

            <div className='mt-8 '>
            <label className='text-base font-normal text-gray-500 '>First Name*</label>
            <br />
            <input className='w-full h-[50px] border bg-gray-200 rounded mt-2 mb-8 focus:outline-none' type="text" name="name" id="" required />
            <label className='text-base font-normal text-gray-500 '>Company Name</label>
            <br />
            <input className='w-full h-[50px] border bg-gray-200 rounded mt-2 mb-8 focus:outline-none' type="text" name="name" id="" required />
            <label className='text-base font-normal text-gray-500 '>Street Address*</label>
            <br />
            <input className='w-full h-[50px] border bg-gray-200 rounded mt-2 mb-8 focus:outline-none' type="text" name="name" id="" required />
            <label className='text-base font-normal text-gray-500 '>Apartment, floor, etc. (optional)</label>
            <br />
            <input className='w-full h-[50px] border bg-gray-200 rounded mt-2 mb-8 focus:outline-none' type="text" name="name" id="" required />
            <label className='text-base font-normal text-gray-500 '>Town/City*</label>
            <br />
            <input className='w-full h-[50px] border bg-gray-200 rounded mt-2 mb-8 focus:outline-none' type="text" name="name" id="" required />
            <label className='text-base font-normal text-gray-500 '>Phone Number*</label>
            <br />
            <input className='w-full h-[50px] border bg-gray-200 rounded mt-2 mb-8 focus:outline-none' type="tel" name="name" id="" required />
            <label className='text-base font-normal text-gray-500 '>Email Address*</label>
            <br />
            <input className='w-full h-[50px] border bg-gray-200 rounded mt-2 mb-8 focus:outline-none' type="email" name="name" id="" required />

            <input  type="checkbox" name="check" id="" />
            <span className='ml-3'>Save this information for faster check-out next time</span>
            </div>
            </div>

            <div className='bill w-[527px] flex justify-between'>
            
            </div>
        </div> 
        </section>
    );
};

export default ShoppingCart;