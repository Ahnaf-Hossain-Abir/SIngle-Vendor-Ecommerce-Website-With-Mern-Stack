import Image from "next/image";
import speaker from "/public/products/bigSpeaker.png"


const MusicExperience = () => {
   const counters = [
    {
        time: "05",
        name: "Days",
    },
    {
        time: 23,
        name: "Hours",
    },
    {
        time: 59,
        name: "Minutes",
    },
    {
        time: 35,
        name: "Seconds",
    },
   ]
     
      
    return (
      <section className="max-w-[1170px] mx-auto h-[500px] bg-[#000000] mt-16 ">
        <div className="flex justify-center">
        <div className="w-[500px] flex items-center">
        <div>
        <div>
              <h5 className="text-[#00FF66]">Categories</h5>
        <h1 className="text-white text-5xl font-semibold mt-8 leading-snug">Enhance Your <br /> Music Experience</h1>
        </div>
        <div className="mt-6 w-[320px] flex justify-between">
        {
            counters?.map((counter)=>(
                <div className="w-16 h-16 border bg-[#FFFFFF] rounded-full flex justify-center items-center">
                <div>
                <p className="font-semibold text-center text-[#000000]">{counter.time}</p>
                <p className="text-[11px] font-normal">{counter.name}</p>
                </div>
                </div>
            ))
        }
        </div>
        <div className="Btn mt-8">
          <button className="bg-[#00FF66] border text-white rounded font-light w-[171px] h-[56px] px-12 py-1 ">
          Buy Now!
          </button>
        </div>
        </div>
        </div>
        

        <div className="w-[500px]  flex items-center">
        <Image className="w-full" src={speaker} width={400}></Image>
        </div>
        <div>

        </div>
        </div>
      </section>
    );
};

export default MusicExperience;