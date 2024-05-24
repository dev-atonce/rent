import { GoOrganization } from "react-icons/go";
import { Logo } from "../Logo/Logo";
import { BsPersonFill, BsPinMap } from "react-icons/bs";
import { TbReportMoney } from "react-icons/tb";
import { FaCalendarDays, FaPeopleGroup } from "react-icons/fa6";
import { LuShip } from "react-icons/lu";
import { MdOutlineHighQuality, MdVerified } from "react-icons/md";
import { AiOutlineSafety } from "react-icons/ai";

export default function Environment({ lng }: any) {
  const text: any = {
    en: {
      title: "Environmental Policy",
      1: "To comply with environmental compliance, law, other regulatory bodies in respect with environmental aspect.",
      2: "Minimize usage of energy and resources and control its usage efficiently and productively.",
      3: "Promote environmental awareness and cooperation in the organization and further expand to the community.",
      4: `Enhance environmental management system continuously.`,
    },
    th: {
      title: "นโยบายด้านสิ่งแวดล้อม",
      1: "ปฏิบัติตามกฎหมาย พันธะสัญญา และข้อกำหนดอื่นๆที่เกี่ยวข้องกับลักษณะ ปัญหาด้านสิ่งแวดล้อมของบริษัทฯ",
      2: "ควบคุมการใช้พลังงานและทรัพยากรต่างๆอย่างคุ้มค่าและมีประสิทธิภาพ",
      3: "ส่งเสริมการมีส่วนร่วมและสร้างจิตสำนึกด้านสิ่งแวดล้อมให้กับบุคลากรภายในองค์กร เพื่อขยายผลสู่สาธารณชน",
      4: `พัฒนาและปรับปรุงระบบการจัดการสิ่งแวดล้อมอย่างต่อเนื่อง`,
    },
  };
  return (
    <div className="bg-slate-50 from-blue-100 rounded-xl mt-4 p-10 md:p-20">
      <div className="w-full flex justify-center pb-20">
        <Logo color="#002B7F" />
      </div>
      <h2 className="font-bold text-xl mb-4 underline underline-offset-4 text-blue-900">
        {text[lng]["title"]}
      </h2>
      <div className="flex flex-col gap-4">
        <div className="grid gap-4 grid-cols-1 md:grid-cols-6 grid-rows-1 border border-slate-400 px-4 py-6 rounded-lg shadow-md">
          <div className="font-bold flex items-center gap-2 md:col-span-2 md:border-r border-slate-300 justify-center text-blue-900">
            <MdVerified size={20} />
            1.
          </div>
          <div className="col-span-5 md:col-span-4">{text[lng]["1"]}</div>
        </div>

        <div className="grid gap-4 grid-cols-1 md:grid-cols-6 grid-rows-1   border border-slate-400 px-4 py-6 rounded-lg shadow-md">
          <div className="font-bold flex items-center gap-2 md:col-span-2 md:border-r border-slate-300 justify-center text-blue-900">
            <MdVerified size={20} />
            2.
          </div>
          <div className="col-span-5 md:col-span-4">{text[lng]["2"]}</div>
        </div>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-6 grid-rows-1   border border-slate-400 px-4 py-6 rounded-lg shadow-md">
          <div className="font-bold flex items-center gap-2 md:col-span-2 md:border-r border-slate-300 justify-center text-blue-900">
            <MdVerified size={20} />
            3.
          </div>
          <div className="col-span-5 md:col-span-4">{text[lng]["3"]}</div>
        </div>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-6 grid-rows-1   border border-slate-400 px-4 py-6 rounded-lg shadow-md">
          <div className="font-bold flex items-center gap-2 md:col-span-2 md:border-r border-slate-300 justify-center text-blue-900">
            <MdVerified size={20} />
            4.
          </div>
          <div className="col-span-5 md:col-span-4">{text[lng]["4"]}</div>
        </div>
      </div>
    </div>
  );
}
