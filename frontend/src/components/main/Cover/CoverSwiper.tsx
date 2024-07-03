"use client";
import "./style.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Image from "next/image";
import { FaCircle } from "react-icons/fa";
import Link from "next/link";

const data = [
  {
    id: 1,
    title: "ARE AWESOME",
    tagline: "NEXTJS 13 & SWIPER SLIDER",
    image: "/img/slide1.jpeg",
    url: "/rental-product",
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
    image: "/img/slide2.jpeg",
    url: "/rental-product",
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
    image: "/img/slide3.jpeg",
    url: "/rental-product",
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
    image: "/img/slide4.jpeg",
    url: "/rental-product",
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
          spaceBetween={0}
          slidesPerView={1}
          autoplay={true}
          loop={true}
          speed={1200}
          // navigation
          pagination={{ type: "bullets", clickable: true }}
          effect="Flip"
          // onSlideChange={() => console.log('slide change')}
          // onSwiper={(swiper) => console.log(swiper)}
        >
          <ul>
            {data.map((v, i) => {
              return (
                <SwiperSlide key={`${i}`} className="ralative ">
                  <Link href={v?.url}>
                    <Image
                      src={v.image}
                      alt={v.title}
                      width={1920}
                      height={618}
                      className=" object-cover w-full aspect-[3/1]"
                    />
                  </Link>
                </SwiperSlide>
              );
            })}
          </ul>
        </Swiper>
      </div>
    </div>
  );
}
