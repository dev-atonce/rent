"use client";
import Link from "next/link";
import { Logo } from "../Logo/Logo";
import { useEffect, useContext, useState } from "react";
import { PageSettingContext } from "@/contexts/PageSettingContext";
import { FaFacebookF } from "react-icons/fa";
import { FaLine } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import NavDropDown from "./NavDropdown";
import { useSelectedLayoutSegment } from 'next/navigation'

export default function Header() {
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  const { primaryColor }: any = useContext(PageSettingContext);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    document.querySelector('html')?.classList.toggle('nav-open');
  };
  const adjust = () => {
    console.log(window.innerWidth)
    if (window.innerWidth > 768) {
      setIsOpen(false);
      document.querySelector('html')?.classList.remove('nav-open');
    }
  };
  const activeSegment = useSelectedLayoutSegment();

  useEffect(() => {

    const loadFacebookSDK = () => {
      if (document.getElementById('facebook-jssdk')) {
        return;
      }
      const script = document.createElement('script');
      script.id = 'facebook-jssdk';
      script.src = 'https://connect.facebook.net/en_US/sdk.js';
      script.async = true;
      script.defer = true;
      script.crossOrigin = "anonymous";
      script.onload = () => {
        window.FB.init({
          xfbml: true,
          version: 'v20.0',
        });
      };
      document.body.appendChild(script);
    };
    loadFacebookSDK();

    const hoverStyle = `.nav-button:hover { color: ${primaryColor};  }`;
    const styleElement = document.createElement("style");
    styleElement.innerHTML = hoverStyle;
    document.head.appendChild(styleElement);
    
    
    adjust();
    window.addEventListener("resize", adjust);

    return () => {
      document.head.removeChild(styleElement);
      document.removeEventListener("resize", adjust);
    };
  }, [primaryColor]);

  return (
    <>
      <div className="flex">
        <div className={`fixed top-0 left-0 h-full w-80 text-black bg-slate-200 transition-transform duration-300 z-40 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="p-4 grid content-stretch ">
            <div>
              <ul className="mt-4">
                <li className="p-2 hover:bg-slate-300"><a href="#home">หน้าแรก</a></li>
                <li className="p-2 hover:bg-slate-300"><a href="#about">เกี่ยวกับเรา</a></li>
                <li className="p-2 hover:bg-slate-300"><a href="#services">สินค้าเช่า</a></li>
                <li className="p-2 hover:bg-slate-300"><a href="#contact">สินค้าขาย</a></li>
                <li className="p-2 hover:bg-slate-300"><a href="#contact">บริการอื่นๆ</a></li>
                <li className="p-2 hover:bg-slate-300"><a href="#contact">ข่าวสาร และกิจกรรม</a></li>
                <li className="p-2 hover:bg-slate-300"><a href="#contact">ร่วมงานกับเรา</a></li>
                <li className="p-2 hover:bg-slate-300"><a href="#contact">ติดต่อเรา</a></li>
              </ul>
            </div>
            <div className="absolute inset-x-0 bottom-0 p-4">
              <div className="flex justify-end social-icon">
                <a href="https://www.facebook.com" target="_blank" className="rounded-full p-2 bg-blue-600">
                  <FaFacebookF fontSize="1.2em" color="white" />
                </a>
                <a href="https://line.me/th" target="_blank" className="rounded-full p-2 bg-green-500 ml-1">
                  <FaLine fontSize="1.2em" color="white"/>
                </a>
                <a href="https://www.youtube.com" target="_blank" className="rounded-full p-2 bg-red ml-1">
                  <FaYoutube fontSize="1.2em" color="white" className="bg-red-500"/>
                </a>
              </div>
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
                  <div className={`w-full h-1 ${isOpen ?`bg-white`:`bg-black`} ${isOpen ? 'transform rotate' : ''} transition-transform duration-300`}></div>
                  <div className={`w-full h-1 ${isOpen ?`bg-white`:`bg-black`} ${isOpen ? 'opacity-0' : ''} transition-opacity duration-300`}></div>
                  <div className={`w-full h-1 ${isOpen ?`bg-white`:`bg-black`} ${isOpen ? 'transform -rotate' : ''} transition-transform duration-300`}></div>
                </div>
              </div>
              <div className="logo">
                <Logo color={primaryColor} />
              </div>
              <div className="hidden md:flex items-center social-icon">
                <a href="https://www.facebook.com" target="_blank" className="rounded-full p-2 bg-blue-600">
                  <FaFacebookF fontSize="1.2em" color="white" />
                </a>
                <a href="https://line.me/th" target="_blank" className="rounded-full p-2 bg-green-500 ml-1">
                  <FaLine fontSize="1.2em" color="white"/>
                </a>
                <a href="https://www.youtube.com" target="_blank" className="rounded-full p-2 bg-red ml-1">
                  <FaYoutube fontSize="1.2em" color="white" className="bg-red-500"/>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="section-2 hidden md:block">
          <div className="container mx-auto">
            <div className="flex overflow-hidden overflow-x-scroll">
              {/* <BurgerMenu /> */}
              <ul className="nav-menu flex">
                <li className="menu-item">
                  <Link href="/" className={`p-4 nav-button hover:text-white ${activeSegment=='/'?`active`:''}`} >
                    หน้าแรก
                  </Link>
                </li>
                <li className="menu-item">
                  <NavDropDown
                    title="เกี่ยวกับเรา" 
                    dropdownItems={
                      [
                        {"title":"ผังองค์กร","href":'/about-us/organizational-chart'},
                        {"title":"ประวัติบริษัท","href":'/about-us/company-history'},
                        {"title":"เงื่อนไขและข้อตกลง","href":"/about-us/terms-conditions"}
                      ]
                  }/>

                </li>
                <li className="menu-item">
                  <Link
                    href="/rental-product"
                    className={`p-4 nav-button hover:text-white`}
                  >
                    สินค้าเช่า
                  </Link>
                </li>
                <li className="menu-item">
                  <Link
                    href="/sale-product"
                    className={`p-4 nav-button hover:text-white`}
                  >
                    สินค้าขาย
                  </Link>
                </li>
                <li className="menu-item">
                  <NavDropDown title="บริการอื่นๆ" dropdownItems={
                    [
                      {"title":"บริการอบรมใช้งานเครื่องจักร","href":'/other-service/training'},
                      {"title":"บริการทดสอบรอก","href":'/other-service/equipment-inspection'},
                    ]
                  }/>
                </li>
                <li className="menu-item">
                  <Link
                    href="/news-activity"
                    className="p-4 nav-button hover:text-white"
                  >
                    ข่าวสาร และกิจกรรม
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="/career" className="p-4 nav-button hover:text-white">
                    ร่วมงานกับเรา
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="/contact" className="p-4 nav-button hover:text-white">
                    ติดต่อเรา
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
