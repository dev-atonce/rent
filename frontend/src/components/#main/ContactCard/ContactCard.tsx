"use client";
import { useTranslation } from "react-i18next";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function ContactCard({ item, lng }: any) {
  const { t } = useTranslation(lng);

  return (
    <div className="bg-slate-200 shadow-md rounded-md p-6 flex flex-col sm:flex-row  justify-between items-center">
      <div className="flex flex-col gap-2 ">
        <h4 className="text-md font-bold">
          {item[`name${lng?.toUpperCase()}`]}
        </h4>
        <p className="text-sm">{item[`address${lng?.toUpperCase()}`]}</p>
        <div className="text-sm">
          <span className="font-semibold">Tel:</span>
          <a href={`tel:${item?.tel}`}>{item?.tel}</a>
        </div>
      </div>
      <a
        href={item?.googleMap}
        className="px-4 py-2 shadow-md bg-blue-900 rounded-xl text-white flex items-center justify-center gap-2 w-full sm:w-auto mt-2 sm:mt-0"
      >
        <span> {t("component.contact-us.map")}</span>
        <FaLongArrowAltRight size={30} />
      </a>
    </div>
  );
}
