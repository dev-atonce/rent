"use client";

import NavDropDown from "../NavDropDown/NavDropDown";
import { useContext, useEffect, useState } from "react";
import { PageSettingContext } from "@/contexts/PageSettingContext";
import LanguageSelect from "@/components/webpanel/LanguageSelect/LanguageSelect";
import { Logo } from "../Logo/Logo";
import { HiMenuAlt1 } from "react-icons/hi";
import NavMenu from "./NavMenu";
import Link from "next/link";
import { useTranslation } from "../../../app/i18n/client";
import styles from "../../../css/Component.module.scss";

export default function Header({ services, lng, font }: any) {
  const { primaryColor, navMenuOpen, setNavMenuOpen }: any =
    useContext(PageSettingContext);

  const { t } = useTranslation(lng);
  const serviceList = services?.map((i: any, key: any) => ({
    title: i[`serviceName${lng.toUpperCase()}`],
    url: `/${lng}/service/${i?.serviceUrl}`,
  }));

  useEffect(() => {
    const hoverColor = primaryColor;
    const hoverStyle = `
        .nav-button:hover {
            background-color: ${hoverColor};
            }
        `;
    const styleElement = document.createElement("style");
    styleElement.innerHTML = hoverStyle;

    document.head.appendChild(styleElement);

    return () => {
      document.head.removeChild(styleElement);
    };
  }, [primaryColor]);

  return (
    <>
      <div className=" sticky top-0 bg-white shadow-1 z-[50]">
        <div className="container mx-auto px-4 flex items-center justify-between py-6">
          <Logo color={primaryColor} />
          {/* SM MD LG Header */}
          <div
            onClick={() => setNavMenuOpen(!navMenuOpen)}
            className={`hover:cursor-pointer xl:hidden px-2 py-1 border border-[${primaryColor}] rounded-xl`}
          >
            <HiMenuAlt1 size={30} color={primaryColor} />
          </div>

          {/* XL Header */}
          <div className="hidden xl:flex items-center">
            <nav>
              <Link
                href={`/${lng}`}
                locale={lng}
                className={`p-4 nav-button hover:text-white rounded-lg text-sm ${lng == "en" ? `${styles.fw600}` : `${styles.menuItem}`}`}
              >
                {t("header.home").toUpperCase()}
              </Link>
            </nav>
            <nav>
              <NavDropDown
                title={t("header.about-us").toUpperCase()}
                list={[
                  {
                    title: t("header.about-us"),
                    url: `/${lng}/about-us`,
                  },
                  {
                    title: t("header.company-profile"),
                    url: `/${lng}/about-us/company-profile`,
                  },
                  {
                    title: t("header.company-history"),
                    url: `/${lng}/about-us/company-history`,
                  },
                  {
                    title: t("header.policy"),
                    url: `/${lng}/about-us/policy`,
                  },
                  {
                    title: t("header.certificate"),
                    url: `/${lng}/about-us/certificate`,
                  },
                ]}
                lng={lng}
                font={font}
              />
            </nav>
            <nav>
              <NavDropDown
                title={t("header.service").toUpperCase()}
                list={serviceList}
                type="service"
                lng={lng}
                font={font}
              />
            </nav>
            <nav>
              <NavDropDown
                title={t("header.news-activity").toUpperCase()}
                list={[
                  {
                    title: t("header.news-activity"),
                    url: `/${lng}/news-activity`,
                  },
                  { title: t("header.flip-book"), url: `/${lng}/flip-book` },
                ]}
                lng={lng}
                font={font}
              />
            </nav>
            <nav>
              <Link
                href={`/${lng}/job`}
                className={`p-4 nav-button hover:text-white rounded-lg text-sm  ${lng == "en" ? `${styles.fw600}` : `${styles.menuItem}`}`}
              >
                {t("header.career").toUpperCase()}
              </Link>
            </nav>
            <nav>
              <Link
                href={`/${lng}/contact-us`}
                className={`p-4 hover:text-white rounded-lg nav-button text-sm  ${lng == "en" ? `${styles.fw600}` : `${styles.menuItem}`}`}
              >
                {t("header.contact-us").toUpperCase()}
              </Link>
            </nav>
          </div>
          <div className="hidden xl:block">
            {/* @ts-ignore */}
            <LanguageSelect lng={lng} />
          </div>
        </div>
      </div>

      <NavMenu
        open={navMenuOpen}
        setOpen={setNavMenuOpen}
        lng={lng}
        serviceList={serviceList}
      />
    </>
  );
}
