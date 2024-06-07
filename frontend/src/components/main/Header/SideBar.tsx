import Link from "next/link";
import {
    FaPlus,
    FaGlobe,
    FaChevronDown,
    FaFacebookF,
    FaYoutube,
    FaLine,
} from "react-icons/fa";
import menuItem from './menuItem.json';

export default function SideBar({sideBar, language}: any)
{
    return (<>
        <ul className="sidebar-menu mt-4">
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
        <div className='w-full flex justify-between py-6 pb-8'>
            <div className="relative inline-block">
                <button
                    className="px-3 py-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 transition-all duration-300 font-medium rounded-lg text-sm flex justify-between items-center w-25"
                    onClick={language.toggleLanguage}
                >
                    <span className="flex items-center font-bold"><FaGlobe className="mr-1 font-bold"/> {language.lng.toUpperCase()}</span> <FaChevronDown />
                </button>
                {language.openLang && (
                <div className="origin-top-left absolute mt-1 w-25 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <ul>
                        <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer" onClick={language.setLanguage}>TH</li>
                        <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer" onClick={language.setLanguage}>EN</li>
                    </ul>
                </div>
                )}
            </div>
            <div className="">
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
    </>)
}