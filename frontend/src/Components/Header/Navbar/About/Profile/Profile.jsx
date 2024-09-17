import Image from "next/image";
import man from "../../../../../../public/products/man.png";
import { CiTwitter } from "react-icons/ci";

const Profile = () => {
  const profile = [
    {
      img: man,
      name: "Tom Cruise",
      title: "Founder & Chairman",
      socialOne: <CiTwitter className="w-6, h-6" />,
      socialTwo: <CiTwitter className="w-6, h-6" />,
      socialThree: <CiTwitter className="w-6, h-6" />,
    },
    {
      img: man,
      name: "Tom Cruise",
      title: "Founder & Chairman",
      socialOne: <CiTwitter className="w-6, h-6" />,
      socialTwo: <CiTwitter className="w-6, h-6" />,
      socialThree: <CiTwitter className="w-6, h-6" />,
    },
    {
      img: man,
      name: "Tom Cruise",
      title: "Founder & Chairman",
      socialOne: <CiTwitter className="w-6, h-6" />,
      socialTwo: <CiTwitter className="w-6, h-6" />,
      socialThree: <CiTwitter className="w-6, h-6" />,
    },
  ];
  return (
    <section className="max-w-[1170px] mx-auto mb-10">
      <div className="grid grid-cols-3 items-center gap-6">
        {profile.map((person, index) => (
          <>
            <div className="w-[370px] h-[430px] border rounded bg-[#F5F5F5]">
              <div className="w-full h-full flex justify-center items-end">
                <Image src={person.img} width={236} height={391} />
              </div>

              <div className="mt-4">
                <h5 className="text-[32px] font-medium">{person.name}</h5>
                <p className="text-base font-normal">{person.title}</p>
                <div className="flex gap-3 items-center">
                  <div>{person.socialOne}</div>
                  <div>{person.socialTwo}</div>
                  <div>{person.socialThree}</div>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </section>
  );
};

export default Profile;
