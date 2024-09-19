import ButtonComponent from "@/Components/CommonComponents/ButtonComponent/ButtonComponent";


const User = () => {
    return (
        <section className="max-w-[1170px] mx-auto mt-16">
         <div className="flex">
         
         <div className="w-[300px] flex flex-col gap-6 px-6">
            <h5 className="text-base font-medium text-[#000000]">Manage My Account</h5>
           <div className="w-full text-base font-normal flex flex-col gap-3 ml-10">
           <p className="hover:text-[#DB4444] cursor-pointer">My Profile</p>
            <p className="hover:text-[#DB4444] cursor-pointer">Address Book</p>
            <p className="hover:text-[#DB4444] cursor-pointer">My Payment Options</p>
           </div>

            <h5 className="text-base font-medium text-[#000000]">My Orders</h5>
           <div className="w-full text-base font-normal flex flex-col gap-3 ml-9">
           <p className="hover:text-[#DB4444] cursor-pointer">My Returns</p>
            <p className="hover:text-[#DB4444] cursor-pointer">My Cancellations</p>
           </div>

           <h5 className="text-base font-medium text-[#000000]">My WishList</h5>

         </div>
         
         <div className="w-[870px] border rounded shadow-md p-12">
            <h4 className="text-xl font-medium text-[#DB4444]">Edit Your Profile</h4>

            <div className="mt-6 flex items-center justify-between">
            <div>
            <label>First Name</label> <br />
            <input className="mt-3 focus:outline-none w-[330px] h-[50px] rounded bg-[#F5F5F5] pl-4" type="text" name="fName" id="" placeholder="Md"/>
            </div>
            <div>
            <label>Last Name</label> <br />
            <input className="mt-3 focus:outline-none w-[330px] h-[50px] rounded bg-[#F5F5F5] pl-4" type="text" name="lName" id="" placeholder="Rimel"/>
            </div>
            </div>
            
            
            <div className="mt-6 mb-6 flex items-center justify-between">
            <div>
            <label>Email</label> <br />
            <input className="mt-3 focus:outline-none w-[330px] h-[50px] rounded bg-[#F5F5F5] pl-4" type="email" name="email" id="" placeholder="rimel1111@gmail.com"/>
            </div>
            <div>
            <label>Address</label> <br />
            <input className="mt-3 focus:outline-none w-[330px] h-[50px] rounded bg-[#F5F5F5] pl-4" type="text" name="address" id="" placeholder="Kingston, 5236, United State"/>
            </div>
            </div>

            <h5 className="font-normal text-base text-[#000000]">Password Changes</h5>
            <input className="mt-3 focus:outline-none w-full h-[50px] rounded bg-[#F5F5F5] pl-4" type="password" name="cpassword" id="" placeholder="Current Passwod"/>
            
            <input className="mt-3 focus:outline-none w-full h-[50px] rounded bg-[#F5F5F5] pl-4" type="password" name="npassword" id="" placeholder="New Passwod"/>
            
            <input className="mt-3 focus:outline-none w-full h-[50px] rounded bg-[#F5F5F5] pl-4" type="password" name="conpassword" id="" placeholder="Confirm New Passwod"/>

            <div className="mt-6 flex justify-end items-center gap-6 cursor-pointer">
             <p>Cancel</p>
             <ButtonComponent name={"Save Changes"} nameColor={"text-white"} fontSize={"text-base"} fontWeight={"font-medium"} width={"w-[214px]"} height={"h-[56px]"} radius={"rounded"} paddingX={"px-12"} paddingY={"py-4"} btnColor={"bg-[#DB4444]"}/>
            </div>
         </div>
         
         </div>   
        </section>
    );
};

export default User;