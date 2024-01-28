import { arrow } from "@/app/assets/icons";
import { Uk, romeItalty, spring, yourap } from "@/app/assets/images";
import Image from "next/image";

const TopSelling = () => {
  return (
    <section className="w-full h-auto mt-[150px]">
      <div className="flex justify-center text-center flex-col gap-4 relative">
        <p className="text-3xl text-[#5E6282] font-bold">Top Selling</p>
        <p className="text-[#14183E] font-bold text-5xl">Top Destinations</p>
        <div className="flex w-full  justify-around  my-10">
          <Image
            src={spring}
            alt=""
            className="absolute right-7 bottom-[90px] -z-10 w-[8rem]"
          />
          <div className=" bg-white  rounded-3xl p-6 shadow-lg m-2">
            <Image src={romeItalty} alt="" />
            <div className="flex justify-between p-3 text-[#5E6282] text-xl">
              <p>Rome, Italty</p>
              <p>$5,42k</p>
            </div>
            <div className="flex gap-6 p-3">
              <Image src={arrow} alt="" />
              <p className="text-[#5E6282] text-xl">10 Days Trip</p>
            </div>
          </div>
          <div className=" bg-white rounded-3xl p-6 shadow-lg m-2">
            <Image src={Uk} alt="" />
            <div className="flex justify-between p-3 text-[#5E6282] text-xl">
              <p>Rome, Italty</p>
              <p>$5,42k</p>
            </div>
            <div className="flex gap-6 p-3">
              <Image src={arrow} alt="" />
              <p className="text-[#5E6282] text-xl">10 Days Trip</p>
            </div>
          </div>
          <div className=" bg-white rounded-3xl p-6 shadow-lg m-2">
            <Image src={yourap} alt="" />
            <div className="flex justify-between p-3 text-[#5E6282] text-xl">
              <p>Rome, Italty</p>
              <p>$5,42k</p>
            </div>
            <div className="flex gap-6 p-3">
              <Image src={arrow} alt="" />
              <p className="text-[#5E6282] text-xl">10 Days Trip</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSelling;
