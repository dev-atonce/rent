"use client";
import Link from "next/link";
import { Logo } from "../Logo/Logo";
import { useEffect, useContext,useRef,useState } from "react";
import { PageSettingContext } from "@/contexts/PageSettingContext";
import { FaFacebookF } from "react-icons/fa";
import { FaLine } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import NavDropDown from "./NavDropdown";
import { useSelectedLayoutSegment } from 'next/navigation'

export default function Header() {
  const { primaryColor }: any = useContext(PageSettingContext);
  const menuRef = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState<Element>();

  useEffect(() => {
    const hoverStyle = `.nav-button:hover { color: ${primaryColor};  }`;
    const styleElement = document.createElement("style");
    styleElement.innerHTML = hoverStyle;

    document.head.appendChild(styleElement);

    const handleClickOutside = (event:any) => {
      if(typeof event.target.closest('[data-toggle]') ==  null){
        event.target.classList.remove('active');
      }
      event.target.closest('.nav-menu').querySelector('.active')?.classList.remove('active');
      
      event.target.classList.add('active');
      setActive(event.target);
    }
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.head.removeChild(styleElement);
      document.body.removeEventListener('click',handleClickOutside);
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
          <div className="nav-menu flex justify-center" ref={menuRef}>
            <Link href="/" className="p-4 nav-button hover:text-white" >
              หน้าแรก
            </Link>
            <NavDropDown
              title="เกี่ยวกับเรา" 
              dropdownItems={
                [
                  {"title":"ผังองค์กร","href":'/about-us/organizational-chart'},
                  {"title":"ประวัติบริษัท","href":'/about-us/company-history'},
                  {"title":"เงื่อนไขและข้อตกลง","href":"/about-us/terms-conditions"}
                ]
            }/>
            <Link
              href="/rental-product"
              className={`p-4 nav-button hover:text-white`}
            >
              สินค้าเช่า
            </Link>
            <Link
              href="/sale-product"
              className={`p-4 nav-button hover:text-white`}
            >
              สินค้าขาย
            </Link>
            <NavDropDown title="บริการอื่นๆ" dropdownItems={
              [
                {"title":"การฝึกอบรมความปลอดภัยในการใช้เครื่องจักร","href":'/service/safety-training-in-using-machinery'},
                {"title":"ความคุ้มครองเครื่องจักร","href":'/service/machinery-coverage'},
              ]
            }/>
            <Link
              href="/news-activity"
              className="p-4 nav-button hover:text-white"
            >
              ข่าวสาร และกิจกรรม
            </Link>
            <Link href="/career" className="p-4 nav-button hover:text-white">
              ร่วมงานกับเรา
            </Link>
            <Link href="/contact" className="p-4 nav-button hover:text-white">
              ติดต่อเรา
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
