import { TbPhone } from "react-icons/tb";
import { LuMessagesSquare } from "react-icons/lu";
import ButtonComponent from "@/Components/CommonComponents/ButtonComponent/ButtonComponent";
import Link from "next/link";

const Contact = () => {
  
  return (
    
    <section className="max-w-[1170px] h-screen mx-auto flex items-center">
      
      <div className="flex gap-7 items-center">
        <div className="Call To Us w-[340px] h-[457px] rounded border shadow-lg bg-[#FFFFFF]">
          <div className="w-full h-full p-11">
            <div className="flex items-center gap-4">
              <div className=" w-10 h-10 rounded-full bg-[#DB4444]">
                <div className="w-full h-full flex justify-center items-center">
                  <TbPhone className=" text-white w-5 h-5" />
                </div>
              </div>

              <div>
                <h5 className="text-base text-[#000000] font-medium">
                  Call To Us
                </h5>
              </div>
            </div>

            <div className="text-sm text-[#000000] font-normal mt-6">
              <p>We are available 24/7, 7 days a week.</p>
              <p className="mt-3">Phone: +8801611112222</p>
            </div>

            <div className="w-[270px] border bg-gray-500 mt-8 mb-8"></div>

            <div className="flex items-center gap-4">
              <div className=" w-10 h-10 rounded-full bg-[#DB4444]">
                <div className="w-full h-full flex justify-center items-center">
                  <LuMessagesSquare className=" text-white w-5 h-5" />
                </div>
              </div>

              <div>
                <h5 className="text-base text-[#000000] font-medium">
                  Write To US
                </h5>
              </div>
            </div>

            <div className="text-sm text-[#000000] font-normal mt-6">
              <p>Fill out our form and we will contact you within 24 hours.</p>
              <p className="mt-3">Emails: customer@exclusive.com</p>
              <p className="mt-3">Emails: support@exclusive.com</p>
            </div>
          </div>
        </div>

        <div className="message-box w-[800px] h-[457px] rounded border shadow-lg bg-[#FFFFFF]">
          <div className="w-full p-8 flex gap-3">
            <input
              type="text"
              name="name"
              id=""
              required
              placeholder="Your Name *"
              className="w-[235px] h-[50px] border bg-[#F5F5F5] rounded pl-4"
            />
            <input
              type="email"
              name="email"
              id=""
              required
              placeholder="Your Email *"
              className="w-[235px] h-[50px] border bg-[#F5F5F5] rounded pl-4"
            />
            <input
              type="tel"
              name="tel"
              id=""
              required
              placeholder="Your Phone *"
              className="w-[235px] h-[50px] border bg-[#F5F5F5] rounded pl-4"
            />
          </div>

          <div className="px-8">
            <input
              type="text"
              name="message"
              id=""
              placeholder="Your Message"
              className="w-[735px] h-[207px] border rounded bg-[#F5F5F5]"
            />

        <div className="Btn mt-8 flex justify-end">
        <ButtonComponent
          name={"Send Massage"}
          nameColor={"text-white"}
          fontSize={"text-base"}
          fontWeight={"font-medium"}
          width={"w-[215px]"}
          height={"h-[56px]"}
          display={"flex"}
          justify={"justify-center"}
          align={"items-center"}
          btnColor={"bg-[#DB4444]"}
          radius={"rounded"}
          border={"border"}
        />
      </div>
          </div>
        </div>
      </div>


      
    </section>
  );
};

export default Contact;
