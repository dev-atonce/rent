"use client";
import { useContext } from "react";
import { Logo } from "../Logo/Logo";
import { PageSettingContext } from "@/contexts/PageSettingContext";
import Link from "next/link";
import { FaLinkedin, FaWeibo } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import FooterLink from "../FooterLink/FooterLink";
import Image from "next/image";
import { useTranslation } from "../../../app/i18n/client";

export default function Footer({ services, lng }: any) {
  const { primaryColor }: any = useContext(PageSettingContext);
  const { t } = useTranslation(lng);
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();

  return (
    <div className="text-white" style={{ backgroundColor: primaryColor }}>
      <div className="container mx-auto py-10">
        <div className="flex justify-start  flex-col lg:flex-row">
          <div className="flex flex-col md:items-start basis-1/3 2xl:basis-1/2 md:pr-20 ">
            <div className="flex-col flex items-start gap-3 md:border-b pb-6 border-white/35">
              <Logo color={"white"} />
              <h3 className="uppercase">
                HANKYU HANSHIN Express (Thailand) Co.,Ltd.
              </h3>
              <p>Tel: +662-126-8500</p>
              <a
                href="https://www.hh-express.com/en/regioninfo/jp/"
                className="border border-white/35 rounded-md px-2 py-2 flex items-center gap-2 "
              >
                <Image
                  src="/image/footer/japan.png"
                  width={30}
                  height={30}
                  alt="flag"
                  className=""
                />
                <span>HANKYU HANSHIN EXPRESS JAPAN</span>
              </a>
            </div>
            <div className="pt-6 flex flex-col gap-4">
              <h4 className="font-bold">Social Media</h4>
              <div className="flex flex-row gap-3">
                <a href="https://www.linkedin.com/company/hankyuhanshinexpress/">
                  <FaLinkedin size={30} />
                </a>
                <a href="https://twitter.com/HEX_GP">
                  <FaXTwitter size={30} />
                </a>
                <a href="https://weibo.com/u/7753706829">
                  <FaWeibo size={30} />
                </a>
              </div>
            </div>
          </div>

          <div className="lg:flex basis-2/3  2xl:basis-1/2 hidden">
            <div className="xl:basis-1/2 basis-1/3 pr-6 ">
              <div className="flex flex-col gap-2 pb-4 border-b border-white/35">
                <h4 className="font-bold">{t("header.about-us")}</h4>

                <FooterLink
                  url={`/${lng}/about-us/company-profile`}
                  label={t("header.company-profile")}
                />
                <FooterLink
                  url={`/${lng}/about-us/company-history`}
                  label={t("header.company-history")}
                />
                <FooterLink
                  url={`${lng}/about-us/policy`}
                  label={t("header.policy")}
                />
                <FooterLink
                  url={`/${lng}/about-us/certificate`}
                  label={t("header.certificate")}
                />
              </div>
              <div className="pt-4 flex flex-col gap-2 ">
                <h4 className="font-bold">{t("header.news-activity")}</h4>
                <FooterLink
                  url={`/${lng}/news-activity`}
                  label={t("header.news-activity")}
                />
                <FooterLink
                  url={`/${lng}/flip-book`}
                  label={t("header.flip-book")}
                />
              </div>
            </div>
            <div className="xl:basis-1/2 basis-2/3">
              <div className="flex flex-col gap-2 pb-4 border-b border-white/35 ">
                <h4 className="font-bold">{t("header.service")}</h4>
                {services?.map((i: any, k: any) => (
                  <FooterLink
                    key={k}
                    url={`/${lng}/service/${i?.serviceUrl}`}
                    label={i[`serviceName${lng.toUpperCase()}`]}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#1c2a47]">
        <div className="container mx-auto py-4  flex items-center justify-center text-white text-xs">
          <div>
            <span className="uppercase">
              Copyright © {currentYear}. HANKYU HANSHIN Express (Thailand)
              Co.,Ltd.
            </span>
          </div>
          {/* <div>
            <span>Privacy Policy</span>
          </div> */}
        </div>
      </div>
    </div>
  );
}
