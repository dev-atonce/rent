"use client";
import Image from "next/image";
import Link from "next/link";
import btnStyled from "../../../css/Button.module.css";
import { BsArrowRight } from "react-icons/bs";
import { useTranslation } from "react-i18next";

export default function AboutUs({ lng }: any) {
  const { t } = useTranslation(lng);
  return (
    <div className="section section-2 home-about-us">
      <div className="pt-6 flex lg:flex-row flex-col-reverse lg:flex gap-4 lg:gap-0 items-center">
        <div className="flex flex-col gap-6">
          <h4 className="text-4xl btn-link font-bold">
            <span className="text-blue-900">Hankyu Hanshin</span> Express
          </h4>
          <h5 className="md:text-2xl text-xl mt-3">
            Connecting all commercial freight routes for your business.
          </h5>
          <div className="flex flex-col gap-4 xl:gap-12">
            {/* <h5 className="text-4xl font-extrabold mt-6">“ Land of Smiles ”</h5> */}

            <Link
              href={`/${lng}/about-us`}
              className={`${btnStyled.btn} ${btnStyled.secondary} btn-link font-bold shadow-md`}
            >
              <span className="mr-2">{t("header.about-us")}</span>
              {/* @ts-ignore */}
              <BsArrowRight className="text-lg" />
            </Link>
          </div>
        </div>
        <div className="">
          <Image
            src="/img/Untitled-2.png"
            className="mx-auto shadow-lg rounded-2xl"
            width={800}
            height={110}
            quality={100}
            alt="About us"
          />
        </div>
      </div>
    </div>
  );
}
