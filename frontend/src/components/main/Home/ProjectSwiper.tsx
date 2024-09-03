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

export default function ProjectSwiper({ projectData }: any) {
  return (
    <div className="py-10 container mx-auto project">
      <div className="w-full flex justify-center text-2xl font-semibold text-slate-600  py-8">
        <h2>
          ตัวอย่าง <span className="text-[#0DA1DB]">ผลงานที่เรามีส่วนร่วม</span>
        </h2>
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
                      src={
                        v?.image
                          ? `${process.env.NEXT_PUBLIC_BASE_URL}${v?.image}`
                          : `${process.env.NEXT_PUBLIC_BASE_URL}public\\image\\no_image.webp`
                      }
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
