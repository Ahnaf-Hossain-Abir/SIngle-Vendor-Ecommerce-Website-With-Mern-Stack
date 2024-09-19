import Image from "next/image";
import tv from "../../../../../public/products/tv.png"
import ButtonComponent from "@/Components/CommonComponents/ButtonComponent/ButtonComponent";
import Link from "next/link";

const ShoppingCart = () => {
    return (
       <section className="w-[1170px] mx-auto mt-16">
        
        <div className="flex flex-col gap-6">
          <div className="shadow-lg rounded bg-[#FFFFFF] h-[72px]">
            <ul className="h-full flex justify-between items-center">
              <li className="w-[200px] text-center">Product</li>
              <li className="w-[200px] text-center">Price</li>
              <li className="w-[200px] text-center">Quantity</li>
              <li className="w-[200px] text-center">Subtotal</li>
            </ul>
          </div>
          
          <div className="shadow-lg rounded bg-[#FFFFFF] h-[102px]">
            <ul className="h-full flex justify-between items-center">
            <li className="w-[200px] flex items-center justify-center gap-2">
              <Image src={tv} width={50} height={39}/>
              <span>LCD Monitor</span>
            </li>
              <li className="w-[200px] text-center">$650</li>
              <li className="w-[200px] text-center"><input type="number" name="quantity" id="" className="border-2 border-gray-500 focus:outline-none w-[80px] h-[52px]" /></li>
              <li className="w-[200px] text-center">$650</li>
            </ul>
          </div>
          
          <div className="shadow-lg rounded bg-[#FFFFFF] h-[102px]">
            <ul className="h-full flex justify-between items-center">
            <li className="w-[200px] flex items-center justify-center gap-2">
              <Image src={tv} width={50} height={39}/>
              <span>LCD Monitor</span>
            </li>
              <li className="w-[200px] text-center">$650</li>
              <li className="w-[200px] text-center"><input type="number" name="quantity" id="" className="border-2 border-gray-500 focus:outline-none w-[80px] h-[52px]" /></li>
              <li className="w-[200px] text-center">$650</li>
            </ul>
          </div>

          <div className="flex items-center justify-between">
          <ButtonComponent name={"Return To Shop"} fontSize={"text-base"} border={"border border-gray-400"} fontWeight={"font-medium"} width={"w-[218px]"} height={"h-[56px]"} radius={"rounded"} paddingX={"px-12"} paddingY={"py-4"}/>

          <ButtonComponent name={"Update Cart"} fontSize={"text-base"} border={"border border-gray-400"} fontWeight={"font-medium"} width={"w-[195px]"} height={"h-[56px]"} radius={"rounded"} paddingX={"px-12"} paddingY={"py-4"}/>
          </div>
         
        </div>

        <div className=" flex justify-between">
        
        <div className='flex justify-between items-center gap-4'>
              
              <div className='w-[300px] h-[56px]'>
               <input className='w-full h-full border border-black rounded pl-4' type="text" name="coupon" id="" placeholder='Coupon Code'/>
              </div>

              <ButtonComponent name={"Apply Coupon"} nameColor={"text-white"} fontSize={"text-base"} fontWeight={"font-medium"} width={"w-[211px]"} height={"h-[56px]"} radius={"rounded"} paddingX={"px-12"} paddingY={"py-4"} btnColor={"bg-[#DB4444]"}/>
        </div>

        <div className="mt-12 w-[470px]  border border-black rounded p-6">
        <h5 className="font-medium text-[20px] text-[#000000]">Cart Total</h5>
        
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

        <div className="mt-6 flex justify-center">
          <Link href={"/bill"}> <ButtonComponent name={"Procees to checkout"} nameColor={"text-white"} fontSize={"text-base"} fontWeight={"font-medium"} width={"w-[260px]"} height={"h-[56px]"} radius={"rounded"} paddingX={"px-12"} paddingY={"py-4"} btnColor={"bg-[#DB4444]"}/></Link>
        </div>
        </div>
        </div>
       </section>
    );
};

export default ShoppingCart;