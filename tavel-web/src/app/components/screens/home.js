import Image from "next/image";
import { Decore, pasanger, plane } from "@/app/assets/images"; // Assuming these are module paths
import { Playbutton } from "@/app/assets/icons";

const Home1 = () => {
  return (
    <div className="flex relative">
      <div className="w-1/2">
        <div className="flex flex-col w-9/12 m-20 ml-36">
          <p className="text-2xl font-bold mb-4 text-[#DF6951]">
            Best Destinations around the world
          </p>
          <p className="text-[#181E4B] text-[5rem] font-bold font-Volkhov leading-tight">
            Travel, enjoy and live a new and full life
          </p>
          <p className="text-[#5E6282] w-9/12 mt-6">
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the.
          </p>
          <div className="flex mt-10  gap-4">
            <div>
              <button className="p-4 px-8 text-lg rounded-xl mt-2 bg-[#F1A501] text-white ">
                Find out more
              </button>
            </div>
            <div className="flex items-center justify-center">
              <div>
                <Image src={Playbutton} alt="Playbutton" className="" />
              </div>
              <div className="text-xl -mt-6 text-[#686D77]">
                <p>Play Demo</p>
              </div>
            </div>
          </div>
        </div>
        {/* <Image alt="aaa" src={pasanger} /> */}
      </div>

      <div className="w-1/2 relative -mt-24">
        <div className="absolute top-0 right-0">
          <Image src={Decore} alt="Decore" className=" h-auto" />
        </div>
        <div className="absolute top-28">
          <Image src={plane} alt="plane" className="absolute w-[15rem] mt-20" />
          <Image
            src={plane}
            alt="plane"
            className="absolute w-[10rem] mt-32 right-0"
          />
          <Image src={pasanger} alt="pasanger" className="h-auto float-right" />
        </div>
      </div>
    </div>
  );
};

export default Home1;
