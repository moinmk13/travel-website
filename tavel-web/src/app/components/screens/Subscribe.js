import { email } from "@/app/assets/icons";
import {
  leftCircel,
  rightCircel,
  rightStars,
  sendIcon,
  suscribeBanner,
} from "@/app/assets/images";
import Image from "next/image";

const Subscribe = () => {
  return (
    <section>
      <div className="my-16 relative">
        <div className="flex items-center justify-center">
          <Image
            src={suscribeBanner}
            className="w-[80%] relative h-[500px]"
            alt="suscribeBanner"
          />
          <p className="absolute text-[40px] -mt-[200px] w-[80%] flex flex-col justify-center items-center font-[600] leading-[54px] text-[#5E6282]">
            <span>Subscribe to get information, latest news and other</span>
            <span>interesting offers about Cobham</span>
          </p>

          <form class="flex items-center gap-8 mt-[147px] absolute ">
            <label for="simple-search" class="sr-only">
              Search
            </label>
            <div class="relative ">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <Image src={email} alt="absolute" />
              </div>
              <input
                type="text"
                id="simple-search"
                class="bg-white border border-[#FF946D]  text-gray-700 text-sm rounded-lg hover:ring-[#FF946D] focus:outline-none focus:ring-[#FF946D] focus:border-[#FF946D] block w-[421px] h-[68px] ps-10 p-2.5  "
                placeholder="Your email."
                required
              />
            </div>
            <button
              type="submit"
              class="p-2.5  text-sm font-medium h-[68px] w-[180px] text-white bg-gradient-to-r from-[#FF946D] to-[#FF7D68] rounded-lg border placeholder:text-[#39425D]  "
            >
              <span class="font-[600] text-[17px]">Subscribe</span>
            </button>
          </form>

          <Image
            src={leftCircel}
            className="absolute h-auto w-[27%] bottom-0 left-[190px] -z-10"
            alt="rightCircel"
          />
          <Image
            src={rightCircel}
            className="absolute top-0 right-[170px] -z-10"
            alt="rightCircel"
          />
          <Image
            src={sendIcon}
            className="absolute -top-4 right-[135px] z-10"
            alt="sendIcon"
          />
        </div>
        <Image
          src={rightStars}
          className="absolute right-[70px] -bottom-[65px]"
          alt="rightStars"
        />
      </div>
    </section>
  );
};

export default Subscribe;
