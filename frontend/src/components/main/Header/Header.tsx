"use client";
// import Link from "next/link";
import { Logo } from "../Logo/Logo";
import { useEffect, useContext, useState } from "react";
import { PageSettingContext } from "@/contexts/PageSettingContext";
import LanguageSwitcher from "../Language/LanguageSwitcher";
import Script from "next/script";
import { FaFacebookF, FaYoutube, FaLine } from "react-icons/fa";
import SideBar from "./SideBar";
import NavBar from "./NavBar";
import { getCookie, hasCookie, setCookie } from "cookies-next";

export default function Header() {
  const [currentLanguage, setCurrentLanguage] = useState<string>("th");
  const [openLang, setOpenLang] = useState<Boolean>(false);
  const [openID, setOpenID] = useState<String>("");

  const [isOpen, setIsOpen] = useState<Boolean>(false);
  const { primaryColor }: any = useContext(PageSettingContext);
  const [openSubMenu, setOpenSubMenu] = useState<Boolean>(false);

  const languages = [
    { label: "Thai", value: "th" },
    { label: `English`, value: "en" },
  ];

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
      icon?.classList.toggle("rotate-135");
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

  const switchLanguage = (lng: any) => {
    lng.preventDefault();
    if (hasCookie("googtrans")) {
      setCookie(
        "googtrans",
        decodeURI("/auto/" + lng.target.innerText.toLowerCase())
      );
      setCurrentLanguage(lng.target.innerText.toLowerCase());
    } else {
      setCookie("googtrans", "/auto/" + lng.target.innerText.toLowerCase());
      setCurrentLanguage(lng.target.innerText.toLowerCase());
    }
    window.location.reload();
  };

  const googleTranslateElementInit = () => {
    // @ts-ignore
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "auto",
        autoDisplay: false,
        // includedLanguages: ["th,en"], // If you remove it, by default all google supported language will be included
        //    @ts-ignore
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
      },
      "google_translate_element"
    );
  };

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

    if (hasCookie("googtrans"))
      // @ts-ignore
      setCurrentLanguage(getCookie("googtrans")?.replace("/auto/", ""));
    else setCurrentLanguage("th");

    // var addScript = document.createElement('script');
    // addScript.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
    // document.body.appendChild(addScript);
    // @ts-ignore
    window.googleTranslateElementInit = googleTranslateElementInit;

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
      <div
        id="google_translate_element"
        style={{
          width: "0px",
          height: "0px",
          position: "absolute",
          left: "50%",
          zIndex: -99999,
        }}
      ></div>
      <div className="flex">
        <div
          className={`fixed block lg:none top-0 left-0 h-full w-80 text-black bg-slate-200 transition-transform duration-300 z-40 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <Script
            src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
            strategy="afterInteractive"
          />
          <div className="grid content-stretch">
            <SideBar
              sideBar={{ toggleSubMenu, closeSideBar }}
              language={{
                currentLanguage,
                setCurrentLanguage,
                openID,
                setOpenID,
                openLang,
                setOpenLang,
                languages,
                toggleLanguage,
                switchLanguage,
              }}
            />
          </div>
        </div>
      </div>
      <div className="header">
        <div className="section-1">
          <div className="container mx-auto">
            <div className="flex justify-between">
              <div className="flex justify-center items-center lg:hidden">
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
                <LanguageSwitcher
                  position="bottom"
                  round="rounded-full"
                  id="Header"
                  language={{
                    currentLanguage,
                    setCurrentLanguage,
                    openID,
                    setOpenID,
                    openLang,
                    setOpenLang,
                    toggleLanguage,
                    languages,
                    switchLanguage,
                  }}
                />
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
        <div className="section-2 hidden lg:block">
          <div className="container mx-auto">
            <div className="responsive-nav">
              <div className="flex justify-center">
                <NavBar />
              </div>
              <div className="more-menu"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
