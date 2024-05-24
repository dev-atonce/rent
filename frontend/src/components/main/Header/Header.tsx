"use client";
import Link from "next/link";
import { Logo } from "../Logo/Logo";
import { useEffect, useContext } from "react";
import { PageSettingContext } from "@/contexts/PageSettingContext";

export default function Header(){

    const { primaryColor }: any = useContext(PageSettingContext);
    useEffect(() => {
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
                <div className="container">
                    <div className="flex justify-between">
                        <div className="logo">
                            <Logo color={primaryColor}/>
                        </div>
                        <div className="social-icon">
                            <div>facebook</div>
                            <div>line</div>
                            <div>youtube</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-2">
                <div className="container">
                    <div className="nav-menu flex justify-center">
                        <Link 
                            href="/" 
                            className="p-4 nav-button hover:text-white"
                        >
                            หน้าแรก
                        </Link>
                        <Link 
                            href="/about-us" 
                            className="p-4 nav-button hover:text-white"
                        >
                            เกี่ยวกับเรา
                        </Link>
                        <Link 
                            href="/rent" 
                            className="p-4 nav-button hover:text-white"
                        >
                            สินค้าเช่า
                        </Link>
                        <Link 
                            href="/sell" 
                            className="p-4 nav-button hover:text-white"
                        >
                            สินค้าขาย
                        </Link>
                        <Link 
                            href="/other-service" 
                            className="p-4 nav-button hover:text-white"
                        >
                            บริการอื่นๆ
                        </Link>
                        <Link 
                            href="/news" 
                            className="p-4 nav-button hover:text-white"
                        >
                            ข่าวสาร และกิจกรรม
                        </Link>
                        <Link 
                            href="/attend" 
                            className="p-4 nav-button hover:text-white"
                        >
                            ร่วมงานกับเรา
                        </Link>
                        <Link 
                            href="/contact-us" 
                            className="p-4 nav-button hover:text-white"
                        >
                            ติดต่อเรา
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}