"use client";
import Link from "next/link";
import { Logo } from "../Logo/Logo";
import { useEffect, useContext, useState, useRef } from "react";
import { PageSettingContext } from "@/contexts/PageSettingContext";
import {
  FaChevronRight,
  FaChevronLeft,
  FaFacebookF,
  FaYoutube,
  FaLine,
} from "react-icons/fa";
import SideBar from "./SideBar";
import NavBar from "./NavBar";

export default function Header() {
  const [lng, setLng] = useState<string>("th");
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  const [openLang, setOpenLang] = useState<Boolean>(false);
  const { primaryColor }: any = useContext(PageSettingContext);
  const [openSubMenu, setOpenSubMenu] = useState<Boolean>(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    document.querySelector("html")?.classList.toggle("nav-open");
  };
  const closeSideBar = () => {
    setIsOpen(false);
    document.querySelector("html")?.classList.remove("nav-open");
  };
  const toggleSubMenu = (e: any) => {
    const subMenu = e.currentTarget.parentElement?.querySelector(".sub-menu");
    if (subMenu) {
      e.preventDefault();
      setOpenSubMenu(!openSubMenu);
      setTimeout;
      e.currentTarget.closest(".menu-item").classList.toggle("active");
      const icon = e.currentTarget.parentElement?.querySelector(".plus-icon");
      icon?.classList.toggle("rotate-45");
      subMenu?.classList.toggle("open");
    } else {
      closeSideBar();
    }
  };
  const adjust = () => {
    if (window.innerWidth > 768) {
      closeSideBar();
    }
  };
  const toggleLanguage = () => setOpenLang(!openLang);
  const setLanguage = (e: any) => {
    setOpenLang(false);
    setLng(e.currentTarget.innerText);
  };
  const scrollableContent = useRef<HTMLDivElement>(null);
  const scrollAmount = 200;

  const scrollToLeft = () => {
    if (scrollableContent.current)
      scrollableContent.current.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
  };
  const scrollToRight = () => {
    if (scrollableContent.current)
      scrollableContent.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
  };

  // const activeSegment = useSelectedLayoutSegment();

  useEffect(() => {
    const loadFacebookSDK = () => {
      if (document.getElementById("facebook-jssdk")) {
        return;
      }
      const script = document.createElement("script");
      script.id = "facebook-jssdk";
      script.src = "https://connect.facebook.net/en_US/sdk.js";
      script.async = true;
      script.defer = true;
      script.crossOrigin = "anonymous";
      script.onload = () => {
        // @ts-ignore
        (window.FB as any).init({
          xfbml: true,
          version: "v20.0",
        });
      };
      document.body.appendChild(script);
    };
    loadFacebookSDK();

    const hoverStyle = `.nav-button:hover { color: ${primaryColor};  }`;
    const styleElement = document.createElement("style");
    styleElement.innerHTML = hoverStyle;
    document.head.appendChild(styleElement);

    window.addEventListener("resize", adjust);

    return () => {
      document.head.removeChild(styleElement);
      document.removeEventListener("resize", adjust);
    };
  }, [primaryColor]);

  return (
    <>
      <div className="flex">
        <div
          className={`fixed top-0 left-0 h-full w-80 text-black bg-slate-200 transition-transform duration-300 z-40 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className="p-4 grid content-stretch">
            <div>
              <SideBar
                sideBar={{ toggleSubMenu, closeSideBar }}
                language={{
                  lng,
                  setLng,
                  openLang,
                  setOpenLang,
                  toggleLanguage,
                  setLanguage,
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="header">
        <div className="section-1">
          <div className="container mx-auto">
            <div className="flex justify-between">
              <div className="flex justify-center items-center md:hidden">
                <div
                  className="cursor-pointer flex flex-col items-center justify-around w-8 h-8 burger"
                  onClick={toggleSidebar}
                >
                  <div
                    className={`w-full h-1 ${isOpen ? `bg-white` : `bg-black`} ${isOpen ? "transform rotate" : ""} transition-transform duration-300`}
                  ></div>
                  <div
                    className={`w-full h-1 ${isOpen ? `bg-white` : `bg-black`} ${isOpen ? "opacity-0" : ""} transition-opacity duration-300`}
                  ></div>
                  <div
                    className={`w-full h-1 ${isOpen ? `bg-white` : `bg-black`} ${isOpen ? "transform -rotate" : ""} transition-transform duration-300`}
                  ></div>
                </div>
              </div>
              <div className="logo">
                <Logo color={primaryColor} />
              </div>
              <div className="hidden md:flex items-center social-icon">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  className="rounded-full p-2 bg-blue-600"
                >
                  <FaFacebookF fontSize="1.2em" color="white" />
                </a>
                <a
                  href="https://line.me/th"
                  target="_blank"
                  className="rounded-full p-2 bg-green-500 ml-1"
                >
                  <FaLine fontSize="1.2em" color="white" />
                </a>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  className="rounded-full p-2 bg-red ml-1"
                >
                  <FaYoutube
                    fontSize="1.2em"
                    color="white"
                    className="bg-red-500"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="section-2 hidden md:block">
          <div className="container mx-auto">
            <div className="responsive-nav">
              <div
                className="more-menu left"
                id="scroll-left"
                onClick={scrollToLeft}
              >
                <div className="py-4 px-2 bg-sky-600 hover:bg-sky-700">
                  <FaChevronLeft />
                </div>
              </div>
              <div className="flex" ref={scrollableContent}>
                <NavBar />
              </div>
              <div
                className="more-menu right"
                id="scroll-right"
                onClick={scrollToRight}
              >
                <div className="py-4 px-2 bg-sky-600 hover:bg-sky-700">
                  <FaChevronRight />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
