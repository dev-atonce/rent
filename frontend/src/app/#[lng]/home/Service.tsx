"use client";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function Service({ lng }: any) {
  const { t } = useTranslation(lng);
  return (
    <div className="section-2 home-service mt-6">
      {/* <div className="pt-6 gap-4 columns-2 md:columns-5 bg-red"> */}
      <div className="pt-6 gap-4 grid grid-cols1 sm:grid-cols-2 xl:grid-cols-5 ">
        <Link
          href={`/${lng}/service/sea-freight`}
          className="service-item p-3 2xl:aspect-[4/4] shadow-md"
        >
          <Image
            src="/service/service01.png"
            className="mx-auto"
            width={110}
            height={110}
            quality={100}
            alt="service 01"
          />
          <p className="service-caption text-center mt-2">
            {t("component.service.sea-freight")}
          </p>
        </Link>
        <Link
          href={`/${lng}/service/air-freight`}
          className="service-item p-3 2xl:aspect-[4/4] shadow-md"
        >
          <Image
            src="/service/service02.png"
            className="mx-auto"
            width={110}
            height={110}
            quality={100}
            alt="service02"
          />
          <p className="service-caption text-center mt-2">
            {t("component.service.air-freight")}
          </p>
        </Link>
        <Link
          href={`/${lng}/service/cross-border-and-in-transit-freight`}
          className="service-item p-3 2xl:aspect-[4/4] shadow-md"
        >
          <Image
            src="/service/service03.png"
            className="mx-auto"
            width={110}
            height={110}
            quality={100}
            alt="service03"
          />
          <p className="service-caption text-center mt-2">
            {t("component.service.cross-border")}
          </p>
        </Link>
        <Link
          href={`/${lng}/service/customs-clearance-and-domestic-transportation`}
          className="service-item p-3 2xl:aspect-[4/4] shadow-md"
        >
          <Image
            src="/service/service04.png"
            className="mx-auto"
            width={110}
            height={110}
            quality={100}
            alt="service04"
          />
          <p className="service-caption text-center mt-2">
            {t("component.service.customs")}
          </p>
        </Link>
        <Link
          href={`/${lng}/service/warehouse-and-distribution`}
          className="service-item p-3 2xl:aspect-[4/4] shadow-md"
        >
          <Image
            src="/service/service05.png"
            className="mx-auto"
            width={110}
            height={110}
            quality={100}
            alt="service05"
          />
          <p className="service-caption text-center mt-2">
            {t("component.service.warehouse")}
          </p>
        </Link>
      </div>
    </div>
  );
}
