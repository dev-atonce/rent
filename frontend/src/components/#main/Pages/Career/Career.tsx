"use client";
import Breadcrumb from "@/components/main/Breadcrumb/Breadcrumb";
import CareerBlog from "@/components/main/Career/CareerBlog";
import FilterSection from "@/components/main/Career/FilterSection";
import JobCard from "@/components/main/Career/JobCard";
import Cover from "@/components/main/Cover/page";
import Loading from "@/components/main/Loading/Loading";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function Career({ lng }: any) {
  const { t } = useTranslation(lng);
  return (
    <>
      <div className="grid grid-cols-8 gap-5">
        <div className="col-span-2"></div>
        <div className="col-span-8 md:col-span-8 lg:col-span-6 xl:col-span-6">
          <h1 className="text-center text-3xl font-bold mt-8 mb-3">
            {t("header.career")}
          </h1>
        </div>
        <div className="col-span-2 hidden lg:block">
          <Image
            className="w-full rounded-xl"
            src="/image/cover/hankyu_career.jpg"
            alt="hankyu career"
            width={500}
            height={500}
            quality={80}
            loading="lazy"
          />
        </div>
        <div className="col-span-8 md:col-span-8 lg:col-span-6 xl:col-span-6">
          <CareerBlog limit={9} typeBlog={"job-search"} lng={lng} />
        </div>
      </div>
    </>
  );
}
