import { FaGlobe, FaChevronDown } from "react-icons/fa";

export default function LanguageSwitcher({ position, round, id, language }: any) {
  
  const thisId = (id)?`languageSwitcher${id}`:`languageSwitcher`;
  const rounded = (round)?`${round}`:`rounded-lg`;
  
  return (
    <div className="relative inline-block notranslate px-4" id={thisId}>
      <button
        type="button"
        title="Language"
        className={`px-3 py-2 bg-slate-300 hover:bg-slate-400 focus:ring-4 focus:outline-none focus:ring-blue-300 transition-all duration-300 font-medium ${rounded} text-sm flex justify-between items-center w-25`}
        onClick={()=>{
          language.toggleLanguage();
          language.setOpenID(thisId)
        }}
      >
        <span className="flex items-center font-bold text-white">
          <FaGlobe className="mr-1 font-bold" /> {language.currentLanguage.toUpperCase()}
        </span>
        <FaChevronDown color={"white"} />
      </button>
      <div
        className={`absolute ${language.openLang && language.openID==thisId ? `block` : `hidden`} mt-1 w-25 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-20`}
        style={position == "top" ? { top: "-78px" } : {}}
      >
        <ul>
          {language.languages?.map((ld: any, i: number) => (
            <li
              key={`l_s_${i}`}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
              onClick={(e) => language.switchLanguage(e)}
            >
              {ld.value.toUpperCase()}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
