import Link from "next/link";
import {
    FaPlus,
    FaFacebookF,
    FaYoutube,
    FaLine,
} from "react-icons/fa"; 
import menuItem from './menuItem.json';
import LanguageSwitcher from "../Language/LanguageSwitcher";

export default function SideBar({sideBar, language}: any)
{
    return (
    <div className="flex">
        <div className="sidebar-wraper w-full max-h-screen overflow-y-scroll" style={{height: `calc(100vh - 68px)`}}>
            <ul className="sidebar-menu p-4">
                {menuItem.map((item, index) => 
                <li key={index} className="menu-item rounded-lg">
                    <Link href={item.href} title={item.title} onClick={(e)=>sideBar.toggleSubMenu(e)} className="p-2 hover:text-blue-700 flex items-center justify-between ">
                        {item.title}{item?.subMenu && <FaPlus className="plus-icon transition-all duration-200"/>}
                    </Link>
                    {item?.subMenu && (
                        <ul className={`sub-menu`}>
                        {item?.subMenu.map((sub,i) =>
                            <li key={index+i}>
                                <Link 
                                    href={sub.href} 
                                    title={sub.title} 
                                    onClick={sideBar.closeSideBar} 
                                    className="submenu-item"
                                >{sub.title}</Link>
                            </li>
                        )}
                        </ul>
                    )}
                </li>
                )}
            </ul>
        </div>
        <div className='fixed bottom-0 flex justify-between w-full max-w-90 p-4'>
            <LanguageSwitcher position="top" language={language}/>
            {/* <div className="relative inline-block">
                {language.openLang && (
                <div className="absolute mt-1 w-25 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5" style={{top:'-78px'}}>
                    <ul>
                        <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer" onClick={language.setLanguage}>TH</li>
                        <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer" onClick={language.setLanguage}>EN</li>
                    </ul>
                </div>
                )}
                <button
                    className="px-3 py-2 bg-slate-300 hover:bg-slate-400 focus:ring-4 focus:outline-none focus:ring-blue-300 transition-all duration-300 font-medium rounded-lg text-sm flex justify-between items-center w-25"
                    onClick={language.toggleLanguage}
                >
                    <span className="flex items-center font-bold"><FaGlobe className="mr-1 font-bold"/> {language.lng.toUpperCase()}</span> <FaChevronDown />
                </button>
            </div> */}
            <div>
                <div className="flex social-icon">
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
    );
}