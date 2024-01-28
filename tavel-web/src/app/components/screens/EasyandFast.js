import {
  Airport,
  Destination,
  building,
  hart,
  leaf,
  makePayment,
  map,
  range,
  send,
} from "@/app/assets/icons";
import { buty, tample } from "@/app/assets/images";
import Image from "next/image";

const EasyandFast = () => {
  return (
    <section className="w-full h-auto mt-20">
      <div className="flex justify-around w-full ">
        <div className="w-1/2 ml-20">
          <p className="text-3xl text-[#5E6282] font-bold">Easy and Fast</p>
          <p className="text-[#14183E] font-bold text-5xl w-[55%] my-6">
            Book Your Next Trip In 3 Easy Steps
          </p>

          <div className="flex gap-8 my-8 ">
            <div className="flex justify-center items-center">
              <Image src={Destination} alt=" " className="w-14 h-14" />
            </div>
            <div className="text-[#5E6282] ">
              <p className=" text-xl font-bold">Choose Destination</p>
              <p className=" w-9/12 text-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.{" "}
              </p>
            </div>
          </div>

          <div className="flex gap-8 my-8">
            <div className="flex justify-center items-center">
              <Image src={makePayment} alt=" " className="w-14 h-14" />
            </div>
            <div className="text-[#5E6282] ">
              <p className=" text-xl font-bold">Make Payment</p>
              <p className=" w-9/12 text-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.{" "}
              </p>
            </div>
          </div>

          <div className="flex gap-8 my-8">
            <div className="flex justify-center items-center">
              <Image src={Airport} alt=" " className="w-14 h-14" />
            </div>
            <div className="text-[#5E6282] ">
              <p className=" text-xl font-bold">
                Reach Airport on Selected Date
              </p>
              <p className=" w-9/12 text-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="w-1/2 relative">
          <div className="mt-20 ">
            <div className="w-[50%] shadow-lg h-[47vh] rounded-3xl">
              <div className="flex justify-center items-center my-8 p-4">
                <Image src={buty} alt="" className="" />
              </div>
              <div className="px-4">
                <p className="font-semibold text-lg">Trip To Greece</p>
              </div>
              <div className="flex gap-2 text-[#84829A] mt-3 text-md px-4">
                <p className="">14-29 June</p>
                <p className="border-l-2"></p>
                <p>by Robbin joseph</p>
              </div>

              <div className="flex gap-4 p-4">
                <div className="bg-[#F5F5F5] w-10 flex justify-center items-center h-10 rounded-full">
                  <Image src={leaf} alt="" />
                </div>
                <div className="bg-[#F5F5F5] w-10 flex justify-center items-center h-10 rounded-full">
                  <Image src={map} alt="" />
                </div>
                <div className="bg-[#F5F5F5] w-10 flex justify-center items-center h-10 rounded-full">
                  <Image src={send} alt="" />
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex gap-4 p-4">
                  <Image src={building} alt="" />
                  <p className="text-[#84829A]">24 people going</p>
                </div>
                <div className="p-4">
                  <Image src={hart} alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex bg-white rounded-3xl shadow-lg border w-max  absolute -mt-52 ml-52 h-[13vh]">
            <div className="m-4">
              <Image src={tample} alt="" className="rounded-full h-14 w-14" />
            </div>
            <div className="m-4 ">
              <p className="text-xl text-[#84829A] ">Ongoing</p>
              <p className="text-xl ">Trip to rome</p>
              <p className="text-xl">
                <span className="text-[#8A79DF]">40%</span> completed
              </p>
              <Image src={range} alt="" className="my-1" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EasyandFast;
