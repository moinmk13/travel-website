import { AppStore, GooglePlay, facebook, instagram, twitter } from "@/app/assets/icons";
import Image from "next/image";
import Link from "next/link";

const sections = [
  {
    title: "Jadoo.",
    description: "Book your trip in a minute, get full Control for much longer.",
  },
  {
    title: "Company",
    links: [
      { text: "About", href: "" },
      { text: "Careers", href: "" },
      { text: "Mobile", href: "" },
    ],
  },
  {
    title: "Contact",
    links: [
      { text: "Help/FAQ", href: "" },
      { text: "Press", href: "" },
      { text: "Affiliates", href: "" },
    ],
  },
  {
    title: "More",
    links: [
      { text: "Airlinefees", href: "" },
      { text: "Airline", href: "" },
      { text: "Low fare tips", href: "" },
    ],
  },
];

const socialIcons = [
  { icon: facebook, alt: "Facebook" },
  { icon: instagram, alt: "Instagram", gradient: true },
  { icon: twitter, alt: "Twitter" },
];

const Footer = () => {
  return (
    <section className="mt-20">
      <div className="flex justify-center">
        <div className="grid grid-cols-5 w-[80%] m-4 items-center">
          {sections.map((section, index) => (
            <div key={index} className={index === 0 ? "-mt-14" : "my-10"}>
              {index === 0 ? (
                <>
                  <h3 className="font-[400] text-[44px] leading-[66px] text-[#181E4B] -mt-[40px]">
                    {section.title}
                  </h3>
                  <p className="font-[400] text-[13px] leading-[16.19px] text-[#5E6282] w-9/12">
                    {section.description}
                  </p>
                </>
              ) : (
                <>
                  <h3 className="font-[700] text-[21px] leading-[26.15px] text-[#080809] my-10">
                    {section.title}
                  </h3>
                  <ul className="flex flex-col gap-3 font-[400] text-[18px] text-[#5E6282] leading-[22.41px]">
                    {section.links.map((link, linkIndex) => (
                      <Link key={linkIndex} href={link.href} className="mt-2">
                        {link.text}
                      </Link>
                    ))}
                  </ul>
                </>
              )}
            </div>
          ))}
          <div>
            <div className="flex justify-center gap-6">
              {socialIcons.map((socialIcon, index) => (
                <div
                  key={index}
                  className={`w-14 h-14 shadow-md rounded-full cursor-pointer flex justify-center items-center ${
                    socialIcon.gradient ? "bg-gradient-to-r from-[#B8D2F1] via-[#F289AA] to-[#C68BF0]" : ""
                  }`}
                >
                  <Image src={socialIcon.icon} className="w-8 h-8" alt={socialIcon.alt} />
                </div>
              ))}
            </div>
            <div className="flex justify-center my-8">
              <p className="font-[500] text-[20px] leading-[24.9px] text-[#5E6282]">Discover our app</p>
            </div>
            <div className="flex justify-center gap-3">
              <Image src={GooglePlay} alt="Google" className="cursor-pointer" />
              <Image src={AppStore} alt="AppStore" className="cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
