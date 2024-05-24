"use client";
import Image from "next/image";
import Link from "next/link";
import btnStyled from "../../../css/Button.module.css";
import { BsArrowRight } from "react-icons/bs";
import { useTranslation } from "react-i18next";

export default function Mission({ lng }: any) {
  const { t } = useTranslation(lng);
  return (
    <div className="section-4 home-mission mt-6">
      <div className="grid grid-cols-5 gap-8 my-10 ">
        <div className="md:col-span-2 col-span-5 flex-col justify-center flex">
          <Image
            src="/img/asdas.jpg"
            className="mx-auto w-full  shadow-lg rounded-3xl"
            width={800}
            height={110}
            quality={100}
            alt="Mission"
          />
        </div>
        <div className="md:col-span-3 col-span-5 flex flex-wrap content-between">
          <div>
            <h4 className="font-bold text-blue-900 title">Mission</h4>
            <p className="indent-2x">
              Logistic company&apos;s home page, incorporating a logistic trend
              could involve highlighting or showcasing the company&apos;s
              capabilities and services in line with the current and future
              trends within the logistics industry. Here are some potential
              elements you could consider:
            </p>
            <p>
              Digitalization and Technology Integration: Emphasize the
              company&apos;s adoption of cutting-edge technologies such as
              real-time tracking, automation, Internet of Things (IoT), and data
              analytics. Highlight how these technologies enhance operational
              efficiency, transparency, and customer experience.
            </p>
            <p>
              Supply Chain Optimization: Showcase the company&apos;s expertise
              in optimizing supply chain processes, including inventory
              management, transportation planning, and route optimization.
              Discuss how the company leverages advanced algorithms and
              analytics to streamline logistics operations and reduce costs.
            </p>
            <p>
              Sustainability and Green Initiatives: Highlight the company&apos;s
              commitment to sustainable practices, such as eco-friendly
              transportation options, carbon footprint reduction strategies, and
              environmental compliance. This trend is gaining significant
              traction in the logistics industry.
            </p>
          </div>
          <div className="w-full">
            <Link
              href="/mission"
              className={`${btnStyled.btn} ${btnStyled.secondary} btn-link font-bold float-right shadow-md`}
            >
              <span className="mr-2">{t("component.button.read-more")}</span>
              {/* @ts-ignore */}
              <BsArrowRight className="text-lg" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
