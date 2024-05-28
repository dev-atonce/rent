"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Image from "next/image";
import { FaCircle } from "react-icons/fa";

const data = [
  {
    id: 1,
    title: "ARE AWESOME",
    tagline: "NEXTJS 13 & SWIPER SLIDER",
    image: "/img/banner01.jpg",
    buttons: [
      {
        id: 1,
        text: "Roberto Nickson",
        link: "https://www.pexels.com/@rpnickson/",
        type: "btn-dark btn-circle",
      },
    ],
  },
  {
    id: 2,
    title: "GIVE IT A SHOOT",
    tagline: "IF YOU LIKE IT",
    image: "/img/banner02.jpg",
    buttons: [
      {
        id: 1,
        text: "Julia M Cameron",
        link: "https://www.pexels.com/@julia-m-cameron/",
        type: "btn-dark btn-circle",
      },
    ],
  },
  {
    id: 3,
    title: "GIVE IT A SHOOT",
    tagline: "IF YOU LIKE IT",
    image: "/img/banner03.jpg",
    buttons: [
      {
        id: 1,
        text: "Julia M Cameron",
        link: "https://www.pexels.com/@julia-m-cameron/",
        type: "btn-dark btn-circle",
      },
    ],
  },
];

export default function CoverSwiper() {
  return (
    <div className="header-slider">
      <div className="w-full header-cover">
        <Swiper
          modules={[Autoplay, Navigation, Pagination, EffectFade]}
          spaceBetween={15}
          slidesPerView={1}
          autoplay={true}
          loop={true}
          speed={1125}
          //   navigation
          pagination={{ type: "bullets", clickable: true }}
          effect="Flip"
          // onSlideChange={() => console.log('slide change')}
          // onSwiper={(swiper) => console.log(swiper)}
        >
          <ul>
            {data.map((v, i) => {
              return (
                <SwiperSlide key={`${i}`} className="ralative ">
                  <Image
                    src={v.image}
                    alt={v.title}
                    width={1920}
                    height={618}
                    className="min-h-[30vh] object-cover"
                  />
                  <div className="absolute top-0 w-full h-full flex items-center justify-center">
                    <div className="section-1 text-center ">
                      <div className="header-catption flex flex-col gap-6">
                        <ul className=" text-xl sm:text-2xl md:text-4xl  lg:text-5xl flex items-center justify-center gap-2 md:gap-6 text-white uppercase ">
                          <li className="flex items-center md:gap-3 gap-1">
                            <FaCircle size="0.75rem" />
                            <div
                              className=""
                              style={{ textShadow: "black 1px 1px 1px" }}
                            >
                              <strong className="font">s</strong>afety
                            </div>
                          </li>
                          <li className="flex items-center md:gap-3 gap-1">
                            <FaCircle size="0.75rem" />
                            <div style={{ textShadow: "black 1px 1px 1px" }}>
                              <strong>q</strong>uality
                            </div>
                          </li>
                          <li className="flex items-center md:gap-3 gap-1">
                            <FaCircle size="0.75rem" />
                            <div style={{ textShadow: "black 1px 1px 1px" }}>
                              <strong>p</strong>rofressional
                            </div>
                          </li>
                        </ul>
                        <div
                          className=" justify-center flex-col items-center text-white  hidden sm:flex gap-3"
                          style={{ textShadow: "black 1px 1px 1px" }}
                        >
                          <h3 className="text-center text-lg md:text-2xl lg:text-3xl font-semibold">
                            Offering solution to optimize the entire logistics
                            process.
                          </h3>
                          <p className="text-center text-normal md:text-lg lg:text-xl">
                            Hankyu Hanshin Express operates own Distribution
                            Centers in all parts of the world.
                            <br />
                            We provide myriad services to flexibly handle your
                            every customer demands.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </ul>
        </Swiper>
      </div>
    </div>
  );
}
