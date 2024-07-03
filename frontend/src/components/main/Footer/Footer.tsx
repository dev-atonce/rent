"use client";
import { useContext } from "react";
import { Logo } from "../Logo/Logo";
import { PageSettingContext } from "@/contexts/PageSettingContext";
import Link from "next/link";
import { FaFacebook, FaLinkedin, FaWeibo } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import Image from "next/image";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";

export default function Footer({ services, lng }: any) {
  const { primaryColor }: any = useContext(PageSettingContext);

  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();

  return (
    <div className="text-slate-600 ">
      <div className="container mx-auto">
        <div className="flex justify-start  flex-col lg:flex-row  border-t-[4px]  py-8 border-[#11A3DD]">
          <div className="flex flex-col justify-center items-center lg:items-start lg:basis-1/2  ">
            <div className="flex-col flex items-center lg:items-start gap-3 md:border-b pb-6 border-white/35 ">
              <Logo color={"white"} />
              <h3 className="uppercase font-semibold">
                บริษัท เร้นท์ (ประเทศไทย) จำกัด (สำนักงานใหญ่)
              </h3>
              <p className="text-sm">
                9/222-224, UM Tower, ถนนรามคำแหง, แขวงสวนหลวง, เขตสวนหลวง,
                กรุงเทพฯ 10250
              </p>
              <div className="sm:flex items-center gap-6 pt-4 hidden ">
                <a href="tel:02-017-7200" className="flex items-center gap-2">
                  <BsTelephone />
                  <span>เบอร์โทร 02-017-7200</span>
                </a>
                <a
                  href="mailto:contact@rent.co.th"
                  className="flex items-center gap-2"
                >
                  <AiOutlineMail size={20} />
                  <span>contact@rent.co.th</span>
                </a>
              </div>
            </div>
          </div>

          <div className="flex lg:basis-1/2 sm:flex-row flex-col items-start ">
            <div className="xl:basis-1/4 w-full sm:basis-2/5 ">
              <div className="flex items-center gap-2 pb-4 justify-around sm:justify-start">
                <div>
                  <h6 className="font-semibold">Social Media</h6>

                  <div className="flex flex-col gap-1">
                    <a
                      href="https://www.facebook.com/rentalmachines/"
                      className=" flex items-center gap-1 bg-slate-50 rounded-full py-1 w-fit pr-2"
                    >
                      <FaFacebook size={25} color="#1877F2" />
                      <span className="text-xs">Rent (Thailand) </span>
                    </a>
                    <a
                      href="https://youtube.com/@rent_thailand"
                      className=" flex items-center gap-1 bg-slate-50 rounded-full py-1 w-fit pr-2"
                    >
                      <Image
                        src="/img/youtube.png"
                        alt="map"
                        width="25"
                        height="25"
                      />
                      <span className="text-xs">@rent_thailand</span>
                    </a>
                    <a
                      href="https://line.me/ti/p/~ID@rent_thailand"
                      className=" flex items-center gap-1 bg-slate-50 rounded-full py-1 w-fit pr-2"
                    >
                      <Image
                        src="/img/line.png"
                        alt="map"
                        width="25"
                        height="25"
                      />
                      <span className="text-xs">@rent_thailand</span>
                    </a>
                  </div>
                </div>
                <div className="flex flex-col items- gap-2 pt-4 sm:hidden text-sm">
                  <a href="tel:02-017-7200" className="flex items-center gap-2">
                    <BsTelephone size={20} />
                    <span>เบอร์โทร 02-017-7200</span>
                  </a>
                  <a
                    href="mailto:contact@rent.co.th"
                    className="flex items-center gap-2"
                  >
                    <AiOutlineMail size={20} />
                    <span>contact@rent.co.th</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="xl:basis-3/4 w-full sm:basis-3/5 hidden sm:block">
              <div className="flex flex-col gap-2 pb-4  ">
                <div className=" flex items-center gap-1 bg-slate-50 rounded-full py-1 w-fit pr-2">
                  <Image
                    src="/img/google_map.png"
                    alt="map"
                    width="25"
                    height="25"
                  />
                  <span>Google Map</span>
                </div>

                <div className="rounded-xl overflow-hidden ">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31007.356436345923!2d100.56171519000512!3d13.723320074543626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d5b794e33cb33%3A0x4d899755384eed21!2zUmVudCAoVGhhaWxhbmQpIENvLixMdGQuIOC4muC4o-C4tOC4qeC4seC4l-C5g-C4q-C5ieC5gOC4iuC5iOC4suC5gOC4hOC4o-C4t-C5iOC4reC4h-C4iOC4seC4geC4ow!5e0!3m2!1sen!2sth!4v1716800912978!5m2!1sen!2sth"
                    width="100%"
                    height="150px"
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-100">
        <div className="container mx-auto py-4  flex items-center justify-center  text-xs">
          <div>
            <span className="">Copyright © {currentYear} www.rent.co.th</span>
          </div>
          {/* <div>
            <span>Privacy Policy</span>
          </div> */}
        </div>
      </div>
    </div>
  );
}
