import Image from 'next/image';
import game from "../../../public/products/game.png"
import { RiVisaLine } from "react-icons/ri";
import ButtonComponent from '@/Components/CommonComponents/ButtonComponent/ButtonComponent';

const BillingDetails = () => {
    return (
        <section className='max-w-[1170px] mx-auto mt-16'>
        <div className='flex justify-between'>
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

           <div className='flex items-center gap-3'>
           <input className='w-6 h-6' type="checkbox" name="check" id="" />
           <span >Save this information for faster check-out next time</span>
           </div>
           </div>
           </div>

           <div className='bill mt-20 w-[527px]'>
           
           {/* selected items with prices */}
           <div className='flex flex-col gap-6'>
           <div className='w-full h-14 flex justify-between items-center'>
             <div className='w-[100px]'>
               <Image src={game} width={54} height={54} />
             </div>
             <div className='w-full flex justify-between items-center'>
             <h6>H1 Gamepad</h6>
             <p>$650</p>
             </div>
            </div>
            <div className='w-full h-14 flex justify-between items-center'>
             <div className='w-[100px]'>
               <Image src={game} width={54} height={54} />
             </div>
             <div className='w-full flex justify-between items-center'>
             <h6>H1 Gamepad</h6>
             <p>$650</p>
             </div>
            </div>

           </div>
           
           {/* subtotal */}
           <div className='mt-6 flex flex-col gap-3'>
           <div className=' w-full flex  justify-between items-center'>
            <h6>Subtotal:</h6>
             <p>$650</p>
             </div>
             <div className="w-full border bg-gray-500 "></div>
            <div className='w-full  flex justify-between items-center'>
            <h6>Subtotal:</h6>
             <p>$650</p>
             </div>
             <div className="w-full border bg-gray-500 "></div>
             <div className='w-full h-6 flex justify-between items-center'>
            <h6>Total:</h6>
             <p>$650</p>
             </div>
           </div>

           {/* delivery system */}
           <div className='mt-6 flex flex-col gap-6'>
            
            <div className='flex justify-between items-center'>
             
             <div className='flex gap-3 items-center'>
               <input className='w-6 h-6' type="radio" name="bank" id="" />
               <span>Bank</span>
             </div>

              <div>
               <ul className='flex gap-3'>
                   <li><RiVisaLine className='w-[42px] h-[42px]' /></li>
                   <li><RiVisaLine className='w-[42px] h-[42px]' /></li>
                   <li><RiVisaLine className='w-[42px] h-[42px]' /></li>
                   <li><RiVisaLine className='w-[42px] h-[42px]' /></li>
               </ul>
              </div>
            </div>

            <div className='flex gap-3 items-center'>
               <input className='w-6 h-6' type="radio" name="cod" id="" />
               <span>Cash on delivery</span>
             </div>

             <div className='flex justify-between items-center'>
              
              <div className='w-[300px] h-[56px]'>
               <input className='w-full h-full border border-black rounded pl-4' type="text" name="coupon" id="" placeholder='Coupon Code'/>
              </div>

              <ButtonComponent name={"Apply Coupon"} nameColor={"text-white"} fontSize={"text-base"} fontWeight={"font-medium"} width={"w-[211px]"} height={"h-[56px]"} radius={"rounded"} paddingX={"px-12"} paddingY={"py-4"} btnColor={"bg-[#DB4444]"}/>
             </div>

             <ButtonComponent name={"Place Order"} nameColor={"text-white"} fontSize={"text-base"} fontWeight={"font-medium"} width={"w-[190px]"} height={"h-[56px]"} radius={"rounded"} paddingX={"px-12"} paddingY={"py-4"} btnColor={"bg-[#DB4444]"}/>
           </div>
            
           </div>

           
       </div> 
       </section>
    );
};

export default BillingDetails;