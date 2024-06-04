"use client";
import Link from "next/link";
import { Logo } from "../Logo/Logo";
import { useEffect, useContext } from "react";
import { PageSettingContext } from "@/contexts/PageSettingContext";
import { FaFacebookF } from "react-icons/fa";
import { FaLine } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import NavDropDown from "./NavDropdown";
import { useSelectedLayoutSegment } from 'next/navigation'

export default function Header() {
  const { primaryColor }: any = useContext(PageSettingContext);
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

    return () => {
      document.head.removeChild(styleElement);
    };
  }, [primaryColor]);

  return (
    <div className="header">
      <div className="section-1">
        <div className="container mx-auto">
          <div className="flex justify-between">
            <div className="logo">
              <Logo color={primaryColor} />
            </div>
            <div className="flex items-center social-icon">
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
      <div className="section-2">
        <div className="container mx-auto">
          <div className="flex justify-center">
            <ul className="nav-menu">
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
                    {"title":"การฝึกอบรมความปลอดภัยในการใช้เครื่องจักร","href":'/service/safety-training-in-using-machinery'},
                    {"title":"ความคุ้มครองเครื่องจักร","href":'/service/machinery-coverage'},
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
  );
}
