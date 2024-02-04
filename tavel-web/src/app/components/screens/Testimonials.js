"use client";
import { human } from "@/app/assets/images";
import Image from "next/image";
import { useEffect, useState } from "react";
import { axon, jetstar, expedia, quantas, italia } from "@/app/assets/icons";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [textArray] = useState([
    "What People Say About Us.",
    "Book Your Next Trip In 3 Easy Steps",
    "Top Destinations",
  ]);
  const [currentText, setCurrentText] = useState(textArray[0]);

  const handleSlideClick = (index) => {
    setCurrentSlide(index);
    setCurrentText(textArray[index]);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextSlide = (currentSlide + 1) % textArray.length;
      handleSlideClick(nextSlide);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentSlide, textArray]);

  const images = [
    { src: axon, alt: "Axon" },
    { src: jetstar, alt: "Jetstar" },
    { src: expedia, alt: "Expedia" },
    { src: quantas, alt: "Quantas" },
    { src: italia, alt: "Italia" },
  ];

  return (
    <>
      <section className="w-full h-auto mt-32">
        <div className="flex justify-around w-full ">
          <div className="w-1/2 ml-20">
            <p className="text-3xl text-[#5E6282] font-bold">Testimonials</p>
            <div
              id="default-carousel"
              className="relative w-full"
              data-carousel="slide"
            >
              <div className="relative w-1/2  overflow-hidden rounded-lg h-[50vh]">
                {textArray.map((text, index) => (
                  <div
                    key={index}
                    className={`duration-700 ease-in-out transition-opacity ${
                      currentSlide === index ? "opacity-100" : "opacity-0"
                    }`}
                    data-carousel-item
                  >
                    <div className="absolute block w-full text-[#14183E] font-bold text-5xl -translate-x-1/2 -translate-y-1/2 top-20 left-1/2">
                      {text}
                    </div>
                  </div>
                ))}
              </div>
              <div className="absolute z-30 flex -translate-x-1/2 bottom-32 left-10  space-x-3 rtl:space-x-reverse">
                {[...Array(textArray.length)].map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    className={`w-3 h-3 rounded-full ${
                      currentSlide === index ? "bg-[#39425D]" : "bg-[#E5E5E5]"
                    }`}
                    aria-current={currentSlide === index}
                    aria-label={`Slide ${index + 1}`}
                    data-carousel-slide-to={index}
                    onClick={() => handleSlideClick(index)}
                  ></button>
                ))}
              </div>
            </div>
          </div>

          <div className="w-1/2">
            <div>
              <Image src={human} alt="" />
              <div className="-mt-6 ml-10 w-[60%] p-6 rounded-xl shadow-lg  ">
                <div className="text-[#5E6282] leading-8 w-[80%]">
                  “On the Windows talking painted pasture yet its express
                  parties use. Sure last upon he same as knew next. Of believed
                  or diverted no.”
                </div>
                <div className="mt-6 ">
                  <p className="text-[#5E6282] text-lg font-semibold">
                    Mike taylor
                  </p>
                  <p className="text-[#5E6282]">Lahore, Pakistan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col justify-center w-full  items-center">
          <div className="flex justify-around gap-[10rem] items-center">
            {images.map((image, index) => (
              <div
                key={index}
                // className="cursor-pointer hover:shadow-md rounded-2xl"
              >
                <Image src={image.src} alt={image.alt} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
