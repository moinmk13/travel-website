import { gair, plane, satalight } from "@/app/assets/icons";
import { mice, ractangle, rightStar } from "@/app/assets/images";
import Image from "next/image";

const Category = () => {
  return (
    <section className="w-full h-auto mt-10">
      <div className="flex justify-center text-center flex-col gap-4 relative">
        <p className="text-3xl text-[#5E6282] font-bold">CATEGORY</p>
        <Image
          alt="rightStar"
          src={rightStar}
          className="absolute right-20 mt-20"
        />
        <p className="text-[#14183E] font-bold text-5xl">
          We Offer Best Services
        </p>
      </div>
      <div className="flex justify-around mt-20">
        <div className="flex flex-col justify-center items-center gap-4 bg-white relative w-1/6 m-8 p-4 rounded-3xl hover:rounded-3xl hover:shadow-lg">
          <Image alt="satalight" src={satalight} className="rounded-md" />
          <p className="text-[#1E1D4C] font-sans text-2xl">
            Calculated Weather{" "}
          </p>
          <p className="w-[80%] text-[#5E6282] text-xl">
            Built Wicket longer admire do barton vanity itself do in it.
          </p>
          <Image
            alt="satalight"
            src={ractangle}
            className="rounded-md absolute mt-[20rem] -z-10 mr-[15rem] "
          />
        </div>
        <div className="flex flex-col justify-center items-center gap-4 bg-white relative w-1/6 m-8 p-4 rounded-3xl hover:rounded-3xl hover:shadow-lg">
          <Image alt="satalight" src={plane} className="rounded-md" />
          <p className="text-[#1E1D4C] font-sans text-2xl">Best Flights </p>
          <p className="w-[80%] text-[#5E6282] text-xl">
            Engrossed listening. Park gate sell they west hard for the.
          </p>
          <Image
            alt="satalight"
            src={ractangle}
            className="rounded-md absolute mt-[20rem] -z-10 mr-[15rem] "
          />
        </div>
        <div className="flex flex-col justify-center items-center gap-4 bg-white relative w-1/6 m-8 p-4 rounded-3xl hover:rounded-3xl hover:shadow-lg">
          <Image alt="satalight" src={mice} className="rounded-md" />
          <p className="text-[#1E1D4C] font-sans text-2xl">Local Events </p>
          <p className="w-[80%] text-[#5E6282] text-xl">
            Barton vanity itself do in it. Preferd to men it engrossed
            listening.
          </p>
          <Image
            alt="satalight"
            src={ractangle}
            className="rounded-md absolute mt-[20rem] -z-10 mr-[15rem] "
          />
        </div>
        <div className="flex flex-col justify-center items-center gap-4 bg-white relative w-1/6 m-8 p-4 rounded-3xl hover:rounded-3xl hover:shadow-lg">
          <Image alt="satalight" src={gair} className="rounded-md" />
          <p className="text-[#1E1D4C] font-sans text-2xl">Customization </p>
          <p className="w-[80%] text-[#5E6282] text-xl">
            We deliver outsourced aviation services for military customers
          </p>
          <Image
            alt="satalight"
            src={ractangle}
            className="rounded-md absolute mt-[20rem] -z-10 mr-[15rem] "
          />
        </div>
      </div>
    </section>
  );
};
export default Category;
