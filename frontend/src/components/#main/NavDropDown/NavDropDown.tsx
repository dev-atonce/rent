"use client";
import { useContext, useEffect } from "react";
import { Dropdown, Space } from "antd";
import { MdKeyboardArrowDown } from "react-icons/md";
import { PageSettingContext } from "@/contexts/PageSettingContext";
import Link from "next/link";
import styles from "../../../css/Component.module.scss";

const NavDropDown = ({ title, list, white, type, lng, font }: any) => {
  const { primaryColor }: any = useContext(PageSettingContext);

  const items = list?.map((i: any, index: any) => ({
    label: (
      <Link
        href={i?.url}
        className={`${font ? `${font} ` : ``}text-base nav-li nav-li py-2 px-1 border-b border-slate-200 w-full`}
      >
        <span className="w-full ">{i?.title}</span>
      </Link>
    ),
    key: index,
  }));

  useEffect(() => {
    const hoverColor = primaryColor;
    const hoverStyle = `
      .nav-button:hover {
        background-color: ${hoverColor};
      }
      .nav-li:hover {
        color: ${hoverColor} !important
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
    <Dropdown menu={{ items }} trigger={["click"]}>
      <a
        onClick={(e) => e.preventDefault()}
        className={`${white && "text-white"} font-semibold p-4 nav-button hover:text-white rounded-lg hover:cursor-pointer  `}
      >
        <Space>
          {title}
          <MdKeyboardArrowDown size={20} />
        </Space>
      </a>
    </Dropdown>
  );
};

export default NavDropDown;
