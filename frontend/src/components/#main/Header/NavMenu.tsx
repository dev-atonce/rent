"use client";
import Link from "next/link";
import NavDropDown from "../NavDropDown/NavDropDown";
import LanguageSelect from "@/components/webpanel/LanguageSelect/LanguageSelect";
import { Logo } from "../Logo/Logo";
import { useTranslation } from "react-i18next";

export default function NavMenu({ open, setOpen, lng, serviceList }: any) {
  const { t } = useTranslation(lng);

  const onSetOpen = (open: boolean) => {
    setTimeout(() => {
      setOpen(open);
    }, 300);
  };

  return (
    <div
      className={`${
        open ? "right-0" : "-right-full"
      } w-full h-full fixed buttom-0 top-0 transition-all duration-700  z-30`}
    >
      <div
        className=" absolute top-0 left-0 bottom-0 right-0  "
        onClick={() => onSetOpen(!open)}
      ></div>

      <div className="w-full sm:w-[70%]  md:w-[30%] h-full shadow-2xl bg-blue-950/90 md:bg-blue-950 py-40 px-4 lg:px-10 absolute right-0 z-20">
        <div className="flex flex-col items-center sm:items-start w-full  gap-8 px-10 md:px-0 ">
          <div className="flex justify-center  w-full">
            <Logo color={"white"} />
          </div>
          <div></div>

          <nav className="border-b-2 border-white/10 w-full pb-2">
            <Link
              href={`/${lng}/`}
              className="p-4 nav-button text-white rounded-lg font-semibold "
            >
              {t("header.home").toUpperCase()}
            </Link>
          </nav>
          <nav className="border-b-2 border-white/10 w-full  pb-2">
            <NavDropDown
              white={true}
              title={t("header.about-us").toUpperCase()}
              list={[
                { title: t("header.about-us"), url: `/${lng}/about-us` },
                {
                  title: t("header.company-profile"),
                  url: `/${lng}/about-us/company-profile`,
                },
                {
                  title: t("header.company-history"),
                  url: `/${lng}/about-us/company-history`,
                },
                { title: t("header.policy"), url: `/${lng}/about-us/policy` },
                {
                  title: t("header.certificate"),
                  url: `/${lng}/about-us/certificate`,
                },
              ]}
            />
          </nav>
          <nav className="border-b-2 border-white/10 w-full  pb-2">
            <NavDropDown
              white={true}
              title={t("header.service").toUpperCase()}
              list={serviceList}
              type="service"
              lng={lng}
            />
          </nav>
          <nav className="border-b-2 border-white/10 w-full  pb-2">
            <NavDropDown
              white={true}
              title={t("header.news-activity").toUpperCase()}
              list={[
                {
                  title: t("header.news-activity"),
                  url: `/${lng}/news-activity`,
                },
                { title: t("header.flip-book"), url: `/${lng}/flip-book` },
              ]}
            />
          </nav>

          <nav className="border-b-2 border-white/10 w-full  pb-2">
            <Link
              href={`/${lng}/job`}
              className={`p-4 nav-button text-white rounded-lg font-semibold `}
            >
              {t("header.career").toUpperCase()}
            </Link>
          </nav>
          <nav className="border-b-2 border-white/10 w-full  pb-2">
            <Link
              href={`/${lng}/contact-us`}
              className="p-4  text-white rounded-lg nav-button font-semibold "
            >
              {t("header.contact-us").toUpperCase()}
            </Link>
          </nav>
          <div className="flex justify-center w-full ">
            {/* @ts-ignore */}
            <LanguageSelect lng={lng} />
          </div>
        </div>
      </div>
    </div>
  );
}
