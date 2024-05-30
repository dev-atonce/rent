import { useState, useRef } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import Link from "next/link";
import { useSelectedLayoutSegment } from 'next/navigation';

function NavDropdown({title,dropdownItems}:any) {
    const [active, setActive] = useState(false);
    const [show, setShow] = useState<String>('hidden');
    const [toggle, setToggle] = useState<Boolean>(false);
    const activeSegment = useSelectedLayoutSegment()
    function setShowDropdown() {
        setShow(show === 'hidden' ? 'show' : 'hidden');
        setToggle(show === 'hidden'? true : false);
    }
    return (
        <li 
            className="nav-button relative hover:text-white"
            data-toggle={toggle}
            onClick={()=>setShowDropdown()}
        >
            <button 
                onClick={()=>setShowDropdown()}
                id="dropdownNavbarLink" 
                data-dropdown-toggle="dropdownNavbar"
                data-dropdown-offset-skidding="100"
                className="m-4 text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 pl-3 pr-4 py-2 md:p-0 font-medium flex items-center justify-between w-full md:w-auto"
            >{title} 
                {toggle? <FaChevronLeft className="text-sm ml-2"/> : <FaChevronDown className="text-sm ml-2"/>}
            </button>
            <div id="dropdownNavbar" className={`absolute ${show} dropdown bg-white overflow-hidden rounded w-100`}>
                <ul aria-labelledby="dropdownLargeButton">
                    {dropdownItems.map((v,k)=>
                    <li key={k}>
                        <Link 
                            href={v?.href}
                            className="hover:bg-slate-200 block px-4 py-2">
                                {v?.title}
                        </Link>
                    </li>)}
                </ul>
            </div>
        </li>
    )
}
export default NavDropdown;