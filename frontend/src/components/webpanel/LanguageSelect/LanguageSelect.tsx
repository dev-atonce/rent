"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { languages } from "../../../app/i18n/settings";

const LanguageSelect: React.FC = ({ label, lng }: any) => {
  // const [selectedOption, setSelectedOption] = useState<string>(lng);
  // const [isOptionSelected, setIsOptionSelected] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);
  const pathname = usePathname();
  const current = lng?.toUpperCase();

  return (
    <div className="relative">
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className="bg-slate-100 text-blue-500 hover:bg-slate-200 focus:ring-4 focus:outline-none focus:ring-blue-200 rounded-lg text-sm py-1 px-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 font-bold"
        type="button"
        onClick={(e) => {
          setShow(show == false ? true : false);
        }}
      >
        {current}
        {/*   @ts-ignore */}
        {show === true ? (
          //   @ts-ignore
          <FaChevronLeft className="ml-2" />
        ) : (
          //   @ts-ignore
          <FaChevronDown className="ml-2" />
        )}
      </button>
      <div
        id="dropdown"
        className={`z-10 ${show == true ? `show` : "hidden"} bg-slate-100 divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 absolute`}
        style={{ width: "-webkit-fill-available" }}
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200 flex"
          aria-labelledby="dropdownDefaultButton"
        >
          {languages
            .filter((l) => lng !== l)
            .map((l, index) => {
              return (
                <li key={l}>
                  <a
                    href={pathname.replace(`/${lng}`, `/${l}`)}
                    className="block py-0 px-2.5 hover:text-blue-500"
                  >
                    {l?.toUpperCase()}
                  </a>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default LanguageSelect;
