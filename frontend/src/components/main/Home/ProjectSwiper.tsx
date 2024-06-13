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
import { FaAngleDoubleRight, FaCircle } from "react-icons/fa";
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

export default function ProjectSwiper({ projectData }: any) {
  return (
    <div className="py-10 container mx-auto project">
      <div className="w-full flex justify-center text-2xl font-semibold text-slate-600  py-8">
        <h4>
          ตัวอย่าง <span className="text-[#0DA1DB]">ผลงานที่เรามีส่วนร่วม</span>
        </h4>
      </div>
      <div className="w-full header-cover">
        <Swiper
          modules={[Autoplay, Navigation, Pagination, EffectFade]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          autoplay={true}
          loop={true}
          speed={1200}
          //   navigation
          pagination={{ type: "bullets", clickable: true }}
          effect="Flip"
          // onSlideChange={() => console.log('slide change')}
          // onSwiper={(swiper) => console.log(swiper)}
        >
          <ul>
            {projectData.map((v: any, i: any) => {
              return (
                <SwiperSlide key={`${i}`} className="ralative ">
                  <Link
                    href={`/project/${v?.id}`}
                    className="flex flex-col items-center gap-2c"
                  >
                    <Image
                      src={"/img/about_1.png"}
                      // src={v.image}
                      alt={v.title}
                      width={1920}
                      height={618}
                      className=" object-cover w-full aspect-[3/2] rounded-xl"
                    />
                    <span>{v?.projectNameTH}</span>
                  </Link>
                </SwiperSlide>
              );
            })}
          </ul>
        </Swiper>
      </div>
      <div className="flex justify-end pt-2">
        <Link
          href="/project"
          className="text-sm text-orange-500 flex items-center "
        >
          ดูทั้งหมด <FaAngleDoubleRight className="translate-y-[2px]" />
        </Link>
      </div>
    </div>
  );
}
